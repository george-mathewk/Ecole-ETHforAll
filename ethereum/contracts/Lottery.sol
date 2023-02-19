// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";

contract Lottery is VRFConsumerBaseV2, ConfirmedOwner {
    uint256 public ticketCount;
    uint256 public ticketPrice = 0.01 ether;
    uint256[] public ticketIdEntered;

    struct Ticket {
        uint256 ticketId;
        IERC721 nft;
        uint256 tokenId;
        uint256 price;
        address payable player;
        bool ifTicketBought;
        bool ifWon;
    }

    mapping(uint256 => Ticket) public tickets;

    function createTicket(IERC721 _nft, uint256 _tokenId) external {
        ticketCount++;

        _nft.transferFrom(msg.sender, address(this), _tokenId);

        tickets[ticketCount] = Ticket(
            ticketCount,
            _nft,
            _tokenId,
            ticketPrice,
            payable(msg.sender),
            false,
            false
        );
    }

    function purchaseTicket(uint256 _ticketId) external payable {
        Ticket storage ticket = tickets[_ticketId];
        require(
            _ticketId > 0 && _ticketId <= ticketCount,
            "Item doesn't exist"
        );
        require(msg.value == 0.01 ether, "Not enough ether to buy ticket");
        require(!ticket.ifTicketBought, "Ticket is already bought");

        ticket.nft.transferFrom(address(this), msg.sender, ticket.tokenId);
        ticketIdEntered.push(_ticketId);
        ticket.ifTicketBought = true;
    }

    //
    //
    //
    //        LOTTERY PART
    //
    //

    event RequestSent(uint256 requestId, uint32 numWords);
    event RequestFulfilled(uint256 requestId, uint256[] randomWords);

    struct RequestStatus {
        bool fulfilled;
        bool exists;
        uint256[] randomWords;
    }
    mapping(uint256 => RequestStatus) public s_requests;
    VRFCoordinatorV2Interface COORDINATOR;

    uint64 s_subscriptionId;

    uint256[] public requestIds;
    uint256 public lastRequestId;

    bytes32 keyHash =
        0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15;
    uint32 callbackGasLimit = 100000;
    uint16 requestConfirmations = 3;
    uint32 numWords = 1;
    uint256 public winnerNo;
    address payable winnerAdd;
    address[] public players;

    constructor(uint64 subscriptionId)
        VRFConsumerBaseV2(0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D)
        ConfirmedOwner(msg.sender)
    {
        COORDINATOR = VRFCoordinatorV2Interface(
            0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D
        );
        s_subscriptionId = subscriptionId;
    }

    function requestRandomWords()
        external
        onlyOwner
        returns (uint256 requestId)
    {
        requestId = COORDINATOR.requestRandomWords(
            keyHash,
            s_subscriptionId,
            requestConfirmations,
            callbackGasLimit,
            numWords
        );
        s_requests[requestId] = RequestStatus({
            randomWords: new uint256[](0),
            exists: true,
            fulfilled: false
        });
        requestIds.push(requestId);
        lastRequestId = requestId;
        emit RequestSent(requestId, numWords);
        return requestId;
    }

    function fulfillRandomWords(
        uint256 _requestId,
        uint256[] memory _randomWords
    ) internal override {
        require(s_requests[_requestId].exists, "request not found");
        s_requests[_requestId].fulfilled = true;
        s_requests[_requestId].randomWords = _randomWords;
        emit RequestFulfilled(_requestId, _randomWords);
    }

    function pickWinner() external payable onlyOwner {
        RequestStatus memory request = s_requests[lastRequestId];
        winnerNo = (request.randomWords[0]) % (ticketIdEntered.length);
        Ticket memory ticket = tickets[winnerNo];
        ticket.ifWon = true;
        winnerAdd = ticket.player;
        winnerAdd.transfer(address(this).balance);
    }

    function idEntered() public view returns (uint256[] memory) {
        return ticketIdEntered;
    }

    function winnerDetails() public view returns (Ticket memory) {
        return tickets[winnerNo];
    }
}

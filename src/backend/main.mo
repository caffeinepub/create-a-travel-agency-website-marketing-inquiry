import Map "mo:core/Map";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Time "mo:core/Time";
import Nat "mo:core/Nat";
import Int "mo:core/Int";

actor {
  module Inquiry {
    public func compareByTimestamp(a : Inquiry, b : Inquiry) : Order.Order {
      Int.compare(a.timestamp, b.timestamp);
    };
  };

  type Inquiry = {
    id : Nat;
    fullName : Text;
    email : Text;
    phone : ?Text;
    travelDates : ?Text;
    destination : Text;
    numTravelers : Nat;
    budgetRange : ?Text;
    message : Text;
    timestamp : Time.Time;
  };

  let inquiries = Map.empty<Nat, Inquiry>();
  var nextId = 0;

  public shared ({ caller }) func submitInquiry(
    fullName : Text,
    email : Text,
    phone : ?Text,
    travelDates : ?Text,
    destination : Text,
    numTravelers : Nat,
    budgetRange : ?Text,
    message : Text,
  ) : async Nat {
    let inquiry : Inquiry = {
      id = nextId;
      fullName;
      email;
      phone;
      travelDates;
      destination;
      numTravelers;
      budgetRange;
      message;
      timestamp = Time.now();
    };
    inquiries.add(nextId, inquiry);
    nextId += 1;
    inquiry.id;
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.values().toArray().sort(Inquiry.compareByTimestamp);
  };

  public query ({ caller }) func getInquiry(id : Nat) : async Inquiry {
    switch (inquiries.get(id)) {
      case (null) { Runtime.trap("Inquiry not found") };
      case (?inquiry) { inquiry };
    };
  };
};

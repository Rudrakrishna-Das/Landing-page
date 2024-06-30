"use client";
import { useState } from "react";
import Card from "./Card";

const AllCards = () => {
  const [selectedCard, setSelectedCard] = useState(false);
  return (
    <section className="grid grid-cols-2 max-lg:grid-cols-1  gap-6 p-16 max-sm:px-4  duration-500">
      <Card
        image={"/icons/people.svg"}
        alt={"people"}
        title={"People"}
        description={
          "Find a teacher, coach or expert for your hobby interest in your locality. Finda a partner ,teammate,accomponished or collaborator"
        }
        hoverImage={"/icons/whitepeople.svg"}
        color={"bg-v-1"}
        isSelected={selectedCard === "People"}
        onSelect={() => setSelectedCard("People")}
      />
      <Card
        image={"/icons/place.svg"}
        alt={"place"}
        title={"Place"}
        description={
          "An Address.  Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus."
        }
        hoverImage={"/icons/placewhite.svg"}
        color={"bg-g-1"}
        isSelected={selectedCard === "Place"}
        onSelect={() => setSelectedCard("Place")}
      />
      <Card
        image={"/icons/product.svg"}
        alt={"product"}
        title={"Product"}
        description={
          "An Item that you can Book, Buy or Rent.  Appointment, Ticket, or Voucher.  Equipment, Instrument or Activity Kit."
        }
        hoverImage={"/icons/whiteproduct.svg"}
        color={"bg-r-1"}
        isSelected={selectedCard === "Product"}
        onSelect={() => setSelectedCard("Product")}
      />
      <Card
        image={"/icons/Program.svg"}
        alt={"program"}
        title={"Program"}
        description={
          "An Event with Venue and Date.  Meetup, Workshop or Webinar.  Exhibition, Performance or Competition."
        }
        hoverImage={"/icons/whiteprogram.svg"}
        color={"bg-b-1"}
        isSelected={selectedCard === "Program"}
        onSelect={() => setSelectedCard("Program")}
      />
    </section>
  );
};

export default AllCards;

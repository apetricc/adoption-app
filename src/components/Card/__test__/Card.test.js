import { render, screen } from "@testing-library/react"
import Card from "../Card"

describe("Card", () => {
    test("should show name of cat", () => {
        //render the Card & pass in some props
        render(
            <Card
                name="Sydney"
                phone="555-555-5555"
                email="drew@gmail.com"
                image={{ url: "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_2x1.jpg", alt: "cute cat" }}
                favoured={false}
            />
        )//render
        expect(
            screen.getByRole("heading", {
                name: /sydney/i
            })
        ).toBeInTheDocument();
    });
});


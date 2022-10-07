import { render, screen } from "@testing-library/react"
import Card from "../Card"

//set up a var with default props for our Card components:
const cardProps = {
    name: "Sydney",
    phone: "555-555-5555",
    email: "drew@gmail.com",
    image: {
        url: "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_2x1.jpg", alt: "cute cat"
    },
    favoured: false
}

describe("Card", () => {
    test("should show name of cat", () => {
        //render the Card & pass in some props
        render(
            <Card
                //destructure the props from a variable instead of manually adding the props here:
                {...cardProps}
            />
        )//render
        expect(
            screen.getByRole("heading", {
                name: /sydney/i
            })
        ).toBeInTheDocument();
    });
    test("should show phone number for cat", () => {
        render(
            <Card
                //if we want to rename one of the props, we do it like this: 
                {...cardProps}
            //name: "newName"
            />
        )//render
        expect(
            // we can get this by role but we're trying getByText()
            screen.getByText(/555-555-5555/i)).toBeInTheDocument();
    });
    test("should show email for cat", () => {
        render(
            <Card
                {...cardProps}
            />
        )//render
        expect(
            screen.getByText(/drew@gmail.com/i)).toBeInTheDocument();
    });
    test("should get alt text for the picture of cat", () => {
        render(
            <Card
                {...cardProps}
            />
        )//render
        //get the element by the alt text, then check that the element is the url in our Card component
        expect(screen.getByAltText(/cute cat/i).src).toBe(cardProps.image.url);
    });
});//describe 'Card'


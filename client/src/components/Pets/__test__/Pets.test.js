import { render, screen } from "@testing-library/react"
import Pets from "../Pets"

describe("Pets", ()=> {
    test("should render the correct amount of cards", () => {
        render(<Pets />);
        expect(screen.getAllByRole("article").length).toBe(5);
    });
});
// describe("Dummy test", () => {
//     test("should always pass", () => {
//         expect(true).toBe(true);
//     });
// });

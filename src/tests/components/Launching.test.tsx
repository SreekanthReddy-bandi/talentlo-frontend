import { render, screen, fireEvent } from "@testing-library/react";
import Launching from "../../components/Launching";
// import { toBeInTheDocument } from '@testing-library/jest-dom';
import '@testing-library/jest-dom';
describe("Launching Component", () => {
  it("renders the welcome text", () => {
    render(<Launching />);
    expect(screen.getByText("WELCOME TO TALENTLO")).toBeInTheDocument();
  });

  it("renders all FAQ questions", () => {
    render(<Launching />);
    const faqQuestions = screen.getAllByText(/how does/i); // Regex to match all questions
    expect(faqQuestions.length).toBeGreaterThan(0); // As per the mock data
  });

  it("toggles FAQ answer visibility when clicked", () => {
    render(<Launching />);
    const firstFAQ = screen.getByText("How does the hiring process work for freelancers?");
    expect(screen.queryByText(/Once your profile is set up/i)).not.toBeInTheDocument();

    // Simulate a click to toggle the FAQ
    fireEvent.click(firstFAQ);
    expect(screen.getByText(/Once your profile is set up/i)).toBeInTheDocument();

    // Simulate another click to close the FAQ
    fireEvent.click(firstFAQ);
    expect(screen.queryByText(/Once your profile is set up/i)).not.toBeInTheDocument();
  });

  it("changes the selected role when radio buttons are clicked", () => {
    render(<Launching />);
    const clientRadio = screen.getByLabelText(/For Clients/i);
    const freelancerRadio = screen.getByLabelText(/For Freelancers/i);

    // Default is "freelancer"
    expect(freelancerRadio).toBeChecked();
    expect(clientRadio).not.toBeChecked();

    // Select "client"
    fireEvent.click(clientRadio);
    expect(clientRadio).toBeChecked();
    expect(freelancerRadio).not.toBeChecked();
  });

  it("renders the Apply as a Freelancer button", () => {
    render(<Launching />);
    const applyButton = screen.getByText(/Apply as a Freelancer/i);
    expect(applyButton).toBeInTheDocument();
  });

  it("renders footer links", () => {
    render(<Launching />);
    expect(screen.getByText(/Terms of Service/i)).toBeInTheDocument();
    expect(screen.getByText(/Privacy Policy/i)).toBeInTheDocument();
  });
});

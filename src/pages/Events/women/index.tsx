import { AccessHub, EventDetails, Hero, Panelists } from "./_components";

export default function App() {
    return (
        <div className="min-h-screen text-white font-sans selection:bg-indigo-500 selection:text-white">
            <Hero />
            <EventDetails />
            <Panelists />
            <AccessHub />
        </div>
    );
}
import { RegisterPresentation } from "../icons/iconApp";


export function IntroAuth() {
    return (
        <div className="lg:grid grid-rows-[75%_25%] justify-center items-center text-white hidden">
            <div className="w-[32rem]">
                <RegisterPresentation />
            </div>

            <div className="text-center items-start h-full">
                <h1 className="text-2xl font-semibold">GSN Formation is free for all people, everywhere</h1>
            </div>
        </div>
    )
}
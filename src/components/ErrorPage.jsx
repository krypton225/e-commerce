import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <section className="h-screen section-padding flex flex-col justify-center items-center">
            <h3 className="text-9xl font-extrabold text-white tracking-widest">404</h3>

            <div className="bg-custom-blue px-2 text-sm rounded rotate-12 absolute">Page Not Found</div>

            <Link to="/" className="mt-10 py-2 px-4 relative border-[1px] border-custom-blue rounded-lg inline-block text-lg font-medium text-custom-blue cursor-pointer transition-all duration-[0.7s] hover:bg-custom-blue hover:text-white">
                Go Home
            </Link>
        </section>
    )
}

export default ErrorPage;
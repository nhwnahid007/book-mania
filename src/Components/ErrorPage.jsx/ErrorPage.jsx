import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-red-600 mb-4">Oops!</h2>
                <p className="text-lg mb-4">{error.statusText || error.message}</p>
                {error.status === 404 && (
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Page not found</h3>
                        <p className="mb-4">Go back where you came from</p>
                        <Link to={'/'} className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Back to Home
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ErrorPage;

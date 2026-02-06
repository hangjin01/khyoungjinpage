
export function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
            <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <p className="text-center text-sm text-gray-500 dark:text-gray-400 md:text-left">
                        © {new Date().getFullYear()} Portfolio. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        {/* Social links can go here */}
                    </div>
                </div>
            </div>
        </footer>
    );
}

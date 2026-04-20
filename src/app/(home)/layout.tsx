interface Props {
    children: React.ReactNode;
};

const Layout = ( { children }: Props) => {
    return (
        <main className="flex flex-col min-h-screen max-h-screen">
           <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-gradient-to-b from-transparent to-black/40
                dark:bg-[radial-gradient(rgba(57,62,74,0.3)_1px,transparent_1px)]
                bg-[radial-gradient(rgba(218,221,226,0.15)_1px,transparent_1px)]
                [background-size:24px_24px]" 
                />
            <div className="flex-1 flex flex-col px-4 pb-4">
                {children}
            </div>
        </main>
    );
};

export default Layout;
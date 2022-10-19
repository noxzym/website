export const AboutComp = function ({
    children,
    className
}: {
    children: JSX.Element[] | JSX.Element;
    className?: string;
}) {
    return (
        <div className="my-3 w-full border-l-2 border-[#222831] dark:border-[#DDDDDD]">
            <div className={`flex w-full flex-col py-1 pl-3 ${className}`}>
                {children}
            </div>
        </div>
    );
};
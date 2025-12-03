import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps{
    children: ReactNode,
    className?: string
}

const Layout =({children, className}:LayoutProps)=>{
    return(
        <div className="min-h-screen bg-background relative ">
            <Header/>
            <div className="pb-14">
            <main className={className}>
                {children}
            </main>
            </div>
            <Footer/>
        </div>
    )
}
export default Layout;           
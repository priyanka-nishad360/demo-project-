import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function Pagination(props) {
    const { currentPage, setCurrentPage, totalPages } = props
    const handlePrevious = () => {
        if (currentPage <= 1) {
            return
        }
        else {
            setCurrentPage((prev)=>prev - 1)
        }
    }
    const handleNext = () => {
        if (currentPage >= totalPages) {
            return
        }
        else {
            setCurrentPage((prev)=>prev + 1)
        }
    }
    return (
        <nav className="my-8 mt-auto" aria-label="orders page navigation">
            <ul className="inline-flex -space-x-px text-sm">
                <li onClick={handlePrevious}>
                    <Link className=" h-8 p-2 text-primary border-2 mx-1 border-primary/50 grid place-content-center" >
                    <Icon icon="ooui:next-rtl"/>
                    </Link>
                </li>              

                <li>
                    <div aria-current="page" className="bg-primary text-neutral-50 outline outline-2 -outline-offset-2 outline-primary/20 h-8 w-6 grid place-content-center " >{currentPage}</div>
                </li>
                <li className={`${currentPage < totalPages ? "" : "hidden"}`}>
                    <div aria-current="page" className=" outline outline-2 -outline-offset-2 outline-primary/20 h-8 w-6 grid place-content-center " >{currentPage+1}</div>
                </li>
                <li className={`${currentPage+1 < totalPages ? "" : "hidden"}`}>
                    <div aria-current="page" className=" outline outline-2 -outline-offset-2 outline-primary/20 h-8 w-6 grid place-content-center " >{currentPage+2}</div>
                </li>
                <li className={`${currentPage+2 < totalPages ? "" : "hidden"}`}>
                    <div aria-current="page" className=" outline outline-2 -outline-offset-2 outline-primary/20 h-8 w-6 grid place-content-center " >{currentPage+3}</div>
                </li>

                <li onClick={handleNext}>
                    <Link  className=" h-8 p-2 text-primary border-2 mx-1 border-primary/50 grid place-content-center" >
                        <Icon icon="ooui:next-ltr"/>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
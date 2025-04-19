import { useCallback, useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { GoProject } from "react-icons/go";
import { LuClockAlert, LuUserRound } from "react-icons/lu";
import { SlCalculator } from "react-icons/sl";
import { TbApiApp } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const ListItems = () => {
    const path = window.location.pathname;
    const url = useNavigate()
    const [change, setChange] = useState("project");
    const [open, setOpen] = useState(false);
    const handelChange = useCallback((value: string) => {
        setChange(value);
    }, []);
    useEffect(()=>{
        if(path !== "/"){
            handelChange(path.split("/")[1]);
        }
        else{
            handelChange("project");
        }
    },[path, handelChange]);
    return (
        <ul className="text-sm pl-10">
            <li>
                <p onClick={() => {handelChange("client"); url("/client")}}
                className={`font-semibold flex gap-2 cursor-pointer items-center pl-3 py-2 ${change === "client" && "bg-blue-100 text-blue-500 border-[3px] border-blue-400 rounded-xl"}`}>
                    <LuUserRound />
                    Clients
                </p>
            </li>
            <li>
                <p onClick={() => {handelChange("project"); url("/")}}
                className={`font-semibold flex gap-2 cursor-pointer items-center pl-3 py-2 ${change === "project" && "bg-blue-100 text-blue-500 border-[3px] border-blue-400 rounded-xl"}`}>
                    <GoProject />
                    Projects
                </p>
            </li>
            <li>
                <p onClick={() => {handelChange("people"); url("/people")}}
                className={`font-semibold flex gap-2 cursor-pointer items-center pl-3 py-2 ${change === "people" && "bg-blue-100 text-blue-500 border-[3px] border-blue-400 rounded-xl"}`}>
                    <LuUserRound />
                    People
                </p>
            </li>
            <li>
                <p onClick={() => {handelChange("vrt") ; setOpen(!open); url("/vrt")}}
                className={`font-semibold flex gap-2 cursor-pointer items-center justify-between px-3 py-2 ${change === "vrt"  && "bg-blue-100 text-blue-500 border-[3px] border-blue-400 rounded-xl"}`}>
                    <span className="flex gap-2 items-center">
                        <LuClockAlert />
                        Vrts
                    </span>
                    <span>
                        <FaAngleUp style={{ display: open ? "block" : "none" }} />
                        <FaAngleDown style={{ display: open ? "none" : "block" }}/>
                    </span>
                </p>
                <span className={`flex flex-col gap-3 pl-10 font-semibold my-3 ${open ? "block" : "hidden"}`}>
                    <span onClick={() => url("/vrt")} className="hover:text-blue-500 duration-300 cursor-pointer">Global</span>
                    <span onClick={() => url("/vrt")} className="hover:text-blue-500 duration-300 cursor-pointer">Internal</span>
                </span>
            </li>
            <li>
                <p onClick={() => {handelChange("question"); url("/question")}}
                className={`font-semibold flex gap-2 cursor-pointer items-center pl-3 py-2 ${change === "question" && "bg-blue-100 text-blue-500 border-[3px] border-blue-400 rounded-xl"}`}>
                    <FaRegCircleQuestion />
                    Questions
                </p>
            </li>
            <li>
                <p onClick={() => {handelChange("cvss"); url("/cvss")}}
                className={`font-semibold flex gap-2 cursor-pointer items-center pl-3 py-2 ${change === "cvss" && "bg-blue-100 text-blue-500 border-[3px] border-blue-400 rounded-xl"}`}>
                    <SlCalculator />
                    CVSS
                </p>
            </li>
            <li>
                <p onClick={() => {handelChange("api"); url("/api")}}
                className={`font-semibold flex gap-2 cursor-pointer items-center pl-3 py-2 ${change === "api" && "bg-blue-100 text-blue-500 border-[3px] border-blue-400 rounded-xl"}`}>
                    <TbApiApp />
                    API
                </p>
            </li>
        </ul>
    );
}

export default ListItems;

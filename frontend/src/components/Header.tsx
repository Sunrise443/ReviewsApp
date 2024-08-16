import React from "react"
import { NavLink } from "react-router-dom"

interface HeaderProps {
    text?: string
    rightProfile: string
  }

export function Header ({
    text,
    rightProfile,
}: HeaderProps) {
    return (
        <div className="flex flex-wrap justify-between items-center mx-auto bg-black text-white font-medium">
            <div className="">---</div>
            <div>{text}</div>
            <div><NavLink to="/user">{rightProfile}</NavLink></div>
        </div>
    )
}

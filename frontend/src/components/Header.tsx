interface HeaderProps {
    leftSlider: string
    text?: string
    rightProfile: string
  }

export function Header ({
    leftSlider,
    text,
    rightProfile,
}: HeaderProps) {
    return (
        <div className="flex flex-wrap justify-between items-center mx-auto bg-black text-white font-medium">
            <div className="">{leftSlider}</div>
            <div>{text}</div>
            <div><a href="../pages/UserProfile">{rightProfile}</a></div>
        </div>
    )
}

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
        <div className="text-blue-500">
            <div className="">{leftSlider}</div>
            <div>{text}</div>
            <div>{rightProfile}</div>
        </div>
    )
}

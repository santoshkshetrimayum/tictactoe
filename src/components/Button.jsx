function Button({val,onClick}) {

  return (
    <div onClick={onClick} className="w-4/12 border border-cyan-400 h-1/3 flex justify-center items-center text-6xl">{val}</div>
  )
}

export default Button
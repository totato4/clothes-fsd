function CarouselButton({
  onClick,
  type,
}: {
  onClick: () => void;
  type: "left" | "right";
}) {
  return (
    <button tabIndex={0} onClick={onClick}>
      {type === "left" && (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="40"
            y="40"
            width="40"
            height="40"
            rx="20"
            transform="rotate(-180 40 40)"
            fill="#F4F4F4"
          />
          <path
            d="M23.3 12.25L17 20.125L23.3 28"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {type === "right" && (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="40" height="40" rx="20" fill="#F4F4F4" />
          <path
            d="M16.7 27.75L23 19.875L16.7 12"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

export default CarouselButton;

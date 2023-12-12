import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      {/* ****
        page 1 start
     **** */}
      <div className="">
        <div className="container mx-auto h-16 bg-gray-600 sticky  top-0 mt-4 rounded-md">
          {/* navbar  */}
          <nav>nav</nav>
        </div>
        {/* hero section */}
        <div
          className="bg-cover bg-center bg-no-repeat h-[765px] bg-light-blue mt-2 "
          style={{ backgroundImage: 'url("/assets/BG.svg")' }}
        >
          <div className="container mx-auto flex flex-col md:flex-row justify-between gap-14 my-32">
            {/* left side */}
            <div className=" flex flex-col items-start self-stretch w-1/2 gap-4">
              <div className="bg-primary-light flex items-center gap-2 text-sm font-medium rounded-2xl px-3 py-[6px] shadow-md">
                <span className="flex items-center gap-1 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.99964 3C6.10828 3.00002 6.21396 3.03543 6.30069 3.10087C6.38741 3.1663 6.45047 3.2582 6.48031 3.36267L7.02231 5.26C7.13901 5.66861 7.35794 6.04073 7.65842 6.34122C7.95891 6.6417 8.33103 6.86063 8.73964 6.97733L10.637 7.51933C10.7414 7.54924 10.8332 7.61232 10.8986 7.69904C10.9639 7.78576 10.9993 7.8914 10.9993 8C10.9993 8.1086 10.9639 8.21424 10.8986 8.30096C10.8332 8.38768 10.7414 8.45076 10.637 8.48067L8.73964 9.02267C8.33103 9.13937 7.95891 9.3583 7.65842 9.65878C7.35794 9.95927 7.13901 10.3314 7.02231 10.74L6.48031 12.6373C6.4504 12.7417 6.38732 12.8336 6.3006 12.8989C6.21388 12.9643 6.10824 12.9996 5.99964 12.9996C5.89104 12.9996 5.7854 12.9643 5.69868 12.8989C5.61196 12.8336 5.54888 12.7417 5.51897 12.6373L4.97697 10.74C4.86027 10.3314 4.64134 9.95927 4.34086 9.65878C4.04037 9.3583 3.66825 9.13937 3.25964 9.02267L1.36231 8.48067C1.25791 8.45076 1.16609 8.38768 1.10072 8.30096C1.03536 8.21424 1 8.1086 1 8C1 7.8914 1.03536 7.78576 1.10072 7.69904C1.16609 7.61232 1.25791 7.54924 1.36231 7.51933L3.25964 6.97733C3.66825 6.86063 4.04037 6.6417 4.34086 6.34122C4.64134 6.04073 4.86027 5.66861 4.97697 5.26L5.51897 3.36267C5.54881 3.2582 5.61187 3.1663 5.69859 3.10087C5.78532 3.03543 5.891 3.00002 5.99964 3ZM11.9996 1C12.1112 0.999938 12.2195 1.03718 12.3075 1.10579C12.3954 1.17441 12.4579 1.27046 12.485 1.37867L12.657 2.06933C12.8143 2.696 13.3036 3.18533 13.9303 3.34267L14.621 3.51467C14.7294 3.54152 14.8257 3.6039 14.8945 3.69187C14.9634 3.77983 15.0008 3.88831 15.0008 4C15.0008 4.11169 14.9634 4.22017 14.8945 4.30813C14.8257 4.3961 14.7294 4.45848 14.621 4.48533L13.9303 4.65733C13.3036 4.81467 12.8143 5.304 12.657 5.93067L12.485 6.62133C12.4581 6.72975 12.3957 6.82605 12.3078 6.89489C12.2198 6.96372 12.1113 7.00112 11.9996 7.00112C11.8879 7.00112 11.7795 6.96372 11.6915 6.89489C11.6035 6.82605 11.5412 6.72975 11.5143 6.62133L11.3423 5.93067C11.2654 5.62295 11.1063 5.34193 10.882 5.11765C10.6577 4.89337 10.3767 4.73426 10.069 4.65733L9.37831 4.48533C9.26989 4.45848 9.17359 4.3961 9.10475 4.30813C9.03592 4.22017 8.99852 4.11169 8.99852 4C8.99852 3.88831 9.03592 3.77983 9.10475 3.69187C9.17359 3.6039 9.26989 3.54152 9.37831 3.51467L10.069 3.34267C10.3767 3.26574 10.6577 3.10663 10.882 2.88235C11.1063 2.65807 11.2654 2.37705 11.3423 2.06933L11.5143 1.37867C11.5414 1.27046 11.6038 1.17441 11.6918 1.10579C11.7797 1.03718 11.8881 0.999938 11.9996 1ZM10.9996 10C11.1047 9.99994 11.207 10.0329 11.2922 10.0943C11.3774 10.1557 11.4411 10.2424 11.4743 10.342L11.737 11.1307C11.837 11.4287 12.0703 11.6633 12.369 11.7627L13.1576 12.026C13.257 12.0593 13.3433 12.123 13.4044 12.2081C13.4656 12.2931 13.4985 12.3952 13.4985 12.5C13.4985 12.6048 13.4656 12.7069 13.4044 12.7919C13.3433 12.877 13.257 12.9407 13.1576 12.974L12.369 13.2373C12.071 13.3373 11.8363 13.5707 11.737 13.8693L11.4736 14.658C11.4403 14.7573 11.3766 14.8436 11.2916 14.9048C11.2065 14.966 11.1044 14.9989 10.9996 14.9989C10.8949 14.9989 10.7928 14.966 10.7077 14.9048C10.6227 14.8436 10.559 14.7573 10.5256 14.658L10.2623 13.8693C10.2132 13.7222 10.1305 13.5885 10.0208 13.4788C9.91115 13.3691 9.77745 13.2864 9.63031 13.2373L8.84164 12.974C8.74233 12.9407 8.656 12.877 8.59484 12.7919C8.53368 12.7069 8.50077 12.6048 8.50077 12.5C8.50077 12.3952 8.53368 12.2931 8.59484 12.2081C8.656 12.123 8.74233 12.0593 8.84164 12.026L9.63031 11.7627C9.92831 11.6627 10.163 11.4293 10.2623 11.1307L10.5256 10.342C10.5588 10.2425 10.6224 10.1559 10.7075 10.0945C10.7925 10.0331 10.8947 10.0001 10.9996 10Z"
                      fill="#2AA7DF"
                    />
                  </svg>{" "}
                  Meet Pyreactor
                </span>
                <span className="flex items-center gap-1 ">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4"
                    height="4"
                    viewBox="0 0 4 4"
                    fill="none"
                  >
                    <circle cx="2" cy="2" r="2" fill="#2AA7DF" />
                  </svg>
                  Our new CMS Software
                </span>
              </div>
              <p className="text-primary-text-black text-left font-Outfit text-[70px] font-semibold leading-[5rem] ">
                Resilient technology solutions{" "}
                <span className="text-[#2AA7DF]">
                  for growth-focused businesses
                </span>
              </p>
              <div className=" bg-light-blue flex items-center gap-2 px-3 py-4 self-stretch  border-l-[var(--primary-blue)]  border-l-4 ">
                <p>
                  We are trusted partners for realizing digital-at-the-core
                  success strategies for businesses across the world and across
                  industries.
                </p>
              </div>
              <button className="bg-primary-btn rounded-md flex items-center gap-2 px-6 py-3 shadow-md text-primary-btn-text">
                <span>Get Started</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M9.62012 3.95337L13.6668 8.00004L9.62012 12.0467"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.33301 8H13.553"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            {/* right side */}
            <div className="w-1/2  flex items-center justify-center">
              {/* carousal */}

              <div className="relative">
                <Image
                  className=" h-[450px] w-[350px] rounded-lg shadow-md  "
                  src="/assets/img1.png"
                  alt=""
                  width={443}
                  height={540}
                />
                {/* badge 1 */}
                <div className="absolute bg-primary-light -left-36 top-60 flex items-center gap-[6px] py-1 px-3 rounded-3xl shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M2.00684 7.47998V10.4733C2.00684 13.4666 3.20684 14.6666 6.20017 14.6666H9.7935C12.7868 14.6666 13.9868 13.4666 13.9868 10.4733V7.47998"
                      stroke="#1A1A1A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.99999 7.99992C9.21999 7.99992 10.12 7.00659 9.99999 5.78659L9.55999 1.33325H6.44666L5.99999 5.78659C5.87999 7.00659 6.77999 7.99992 7.99999 7.99992Z"
                      stroke="#1A1A1A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.2065 7.99992C13.5532 7.99992 14.5399 6.90659 14.4065 5.56659L14.2199 3.73325C13.9799 1.99992 13.3132 1.33325 11.5665 1.33325H9.5332L9.99987 6.00659C10.1132 7.10659 11.1065 7.99992 12.2065 7.99992Z"
                      stroke="#1A1A1A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.75992 7.99992C4.85992 7.99992 5.85325 7.10659 5.95992 6.00659L6.10659 4.53325L6.42659 1.33325H4.39326C2.64659 1.33325 1.97992 1.99992 1.73992 3.73325L1.55992 5.56659C1.42659 6.90659 2.41326 7.99992 3.75992 7.99992Z"
                      stroke="#1A1A1A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.99967 11.3333C6.88634 11.3333 6.33301 11.8866 6.33301 12.9999V14.6666H9.66634V12.9999C9.66634 11.8866 9.11301 11.3333 7.99967 11.3333Z"
                      stroke="#1A1A1A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>commerce</span>
                </div>
                {/* badge 2 */}
                <div className="absolute bg-primary-light right-28 -top-10 flex items-center gap-[6px] py-1 px-3 rounded-3xl shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M9.39904 12.418H6.17801C6.00794 12.418 5.86991 12.279 5.86991 12.1077V11.8775C5.86991 11.3832 5.55914 10.8811 5.23051 10.3493C4.79363 9.6432 4.29883 8.84319 4.29883 7.78548C4.29883 5.86282 5.85225 4.29858 7.76141 4.29858C9.67058 4.29858 11.2242 5.86282 11.2242 7.78548C11.2242 8.68662 10.7929 9.43637 10.3759 10.1617C10.0317 10.7607 9.70693 11.3259 9.70693 11.8775V12.1077C9.70714 12.279 9.56911 12.418 9.39904 12.418ZM6.48425 11.7975H9.09218C9.11806 11.1119 9.47032 10.499 9.84208 9.85147C10.2188 9.19645 10.608 8.51992 10.608 7.78548C10.608 6.20491 9.33085 4.91906 7.76141 4.91906C6.19197 4.91906 4.91502 6.20511 4.91502 7.78548C4.91502 8.66594 5.34122 9.35488 5.75345 10.0213C6.09913 10.5803 6.45652 11.1578 6.48425 11.7975Z"
                      fill="#1A1A1A"
                    />
                    <path
                      d="M9.22526 13.6121H6.29628C6.11602 13.6121 5.96973 13.5051 5.96973 13.3733C5.96973 13.2415 6.11602 13.1345 6.29628 13.1345H9.22526C9.40552 13.1345 9.55182 13.2415 9.55182 13.3733C9.55182 13.5051 9.40552 13.6121 9.22526 13.6121Z"
                      fill="#1A1A1A"
                    />
                    <path
                      d="M8.72166 15.0448H6.79974C6.60517 15.0448 6.44727 14.8843 6.44727 14.6866C6.44727 14.4888 6.60517 14.3284 6.79974 14.3284H8.72166C8.91622 14.3284 9.07413 14.4888 9.07413 14.6866C9.07413 14.8843 8.91622 15.0448 8.72166 15.0448Z"
                      fill="#1A1A1A"
                    />
                    <path
                      d="M7.76153 3.34338C7.5638 3.34338 7.40332 3.19082 7.40332 3.00285V1.29586C7.40332 1.10788 7.5638 0.955322 7.76153 0.955322C7.95926 0.955322 8.11974 1.10788 8.11974 1.29586V3.00285C8.11974 3.19082 7.95926 3.34338 7.76153 3.34338Z"
                      fill="#1A1A1A"
                    />
                    <path
                      d="M11.2791 4.53736C11.2039 4.53736 11.1287 4.50878 11.0714 4.45142C10.9567 4.33669 10.9567 4.1509 11.0714 4.03618L12.1558 2.95177C12.2705 2.83704 12.4563 2.83704 12.571 2.95177C12.6857 3.06649 12.6857 3.25228 12.571 3.36701L11.4866 4.45142C11.4292 4.50859 11.3542 4.53736 11.2791 4.53736Z"
                      fill="#1A1A1A"
                    />
                    <path
                      d="M3.15885 12.6567C3.08604 12.6567 3.01302 12.6305 2.95606 12.5779C2.83881 12.4693 2.83451 12.2891 2.94647 12.1752L4.03088 11.0731C4.14304 10.9596 4.3286 10.9552 4.44605 11.0638C4.5633 11.1725 4.5676 11.3527 4.45564 11.4666L3.37123 12.5686C3.31349 12.6273 3.23637 12.6567 3.15885 12.6567Z"
                      fill="#1A1A1A"
                    />
                    <path
                      d="M14.2529 8.11949H12.7323C12.5588 8.11949 12.418 7.95902 12.418 7.76129C12.418 7.56355 12.5588 7.40308 12.7323 7.40308H14.2529C14.4264 7.40308 14.5672 7.56355 14.5672 7.76129C14.5672 7.95902 14.4264 8.11949 14.2529 8.11949Z"
                      fill="#1A1A1A"
                    />
                    <path
                      d="M2.78586 8.11949H1.27355C1.09775 8.11949 0.955078 7.95902 0.955078 7.76129C0.955078 7.56355 1.09775 7.40308 1.27355 7.40308H2.78586C2.96166 7.40308 3.10433 7.56355 3.10433 7.76129C3.10433 7.95902 2.96166 8.11949 2.78586 8.11949Z"
                      fill="#1A1A1A"
                    />
                    <path
                      d="M4.03846 4.53736C3.97198 4.53736 3.90549 4.50787 3.85477 4.44869L2.94133 3.38294C2.83987 3.26457 2.83987 3.07287 2.94133 2.9545C3.04278 2.83613 3.20708 2.83613 3.30854 2.9545L4.22198 4.02025C4.32343 4.13862 4.32343 4.33032 4.22198 4.44869C4.17142 4.50767 4.10494 4.53736 4.03846 4.53736Z"
                      fill="#1A1A1A"
                    />
                    <path
                      d="M12.3541 12.6567C12.2766 12.6567 12.199 12.6273 12.1398 12.5681L11.0741 11.5023C10.9558 11.384 10.9558 11.1923 11.0741 11.0739C11.1925 10.9555 11.3842 10.9555 11.5025 11.0739L12.5682 12.1396C12.6866 12.258 12.6866 12.4497 12.5682 12.5681C12.5092 12.6271 12.4317 12.6567 12.3541 12.6567Z"
                      fill="#1A1A1A"
                    />
                    <path
                      d="M6.35669 9.31357C6.27492 9.31357 6.19314 9.28248 6.13074 9.22008C5.27934 8.36847 5.27934 6.98276 6.13074 6.13115C6.98279 5.27975 8.36829 5.27996 9.21949 6.13115C9.34428 6.25594 9.34428 6.45804 9.21949 6.58283C9.09469 6.70762 8.8926 6.70762 8.7678 6.58283C8.16556 5.98059 7.1851 5.98059 6.58243 6.58283C5.98018 7.18528 5.98018 8.16595 6.58243 8.7684C6.70722 8.89319 6.70722 9.0955 6.58243 9.22008C6.52003 9.28248 6.43825 9.31357 6.35669 9.31357Z"
                      fill="#1A1A1A"
                    />
                  </svg>
                  <span>SaaS</span>
                </div>

                {/* badge 3 */}
                <div className="absolute bg-primary-light -right-32 top-[296px] flex items-center gap-[6px] py-1 px-3 rounded-3xl shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.33289 14.6667H10.6662C13.3462 14.6667 13.8262 13.5933 13.9662 12.2867L14.4662 6.95333C14.6462 5.32667 14.1796 4 11.3329 4H4.66623C1.81956 4 1.35289 5.32667 1.53289 6.95333L2.03289 12.2867C2.17289 13.5933 2.65289 14.6667 5.33289 14.6667Z"
                      stroke="#1A1A1A"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.33301 3.99992V3.46659C5.33301 2.28659 5.33301 1.33325 7.46634 1.33325H8.53301C10.6663 1.33325 10.6663 2.28659 10.6663 3.46659V3.99992"
                      stroke="#1A1A1A"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.33366 8.66667V9.33333C9.33366 9.34 9.33366 9.34 9.33366 9.34667C9.33366 10.0733 9.32699 10.6667 8.00033 10.6667C6.68033 10.6667 6.66699 10.08 6.66699 9.35333V8.66667C6.66699 8 6.66699 8 7.33366 8H8.66699C9.33366 8 9.33366 8 9.33366 8.66667Z"
                      stroke="#1A1A1A"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.433 7.33325C12.893 8.45325 11.133 9.11992 9.33301 9.34659"
                      stroke="#1A1A1A"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1.74707 7.51343C3.24707 8.54009 4.9404 9.16009 6.66707 9.35343"
                      stroke="#1A1A1A"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>Job Board</span>
                </div>
              </div>
            </div>
          </div>

          {/* <div
            className="bg-cover bg-center bg-no-repeat h-[142px] w-screen drop-shadow-2xl"
            style={{ backgroundImage: 'url("/assets/footer1.png")' }}
          >
            <div>footer</div>
          </div> */}
        </div>

        {/* footer section nav */}
      </div>

      {/* ****
        page 1 end
     **** */}

      {/* ****
        page 2 start
     **** */}
      <section className="">
        <div className="container mx-auto flex items-start justify-center  py-20">
          {/* left side  */}
          <div>
            <div className="flex w-[532px] pr-6 flex-col items-start gap-4">
              <h2 className="text-4xl font-semibold">What We do?</h2>
              <p className="text-base font-normal text-primary-text-black">
                At Cdda, we build mission-critical software systems using the
                power of Digital, Data, Cloud & AI – that help organizations
                adapt to the changing IT landscape and surpass the competition.
              </p>
            </div>
          </div>
          {/* right side */}
          <div className="w-full">
            {/* right side */}

            <div class="accordion">
              <div class="accordion-item">
                <input type="checkbox" id="section1" class="accordion-input" />
                <label for="section1" class="accordion-header">
                  Digital Product Engineering{" "}
                  <span class="accordion-icon">+</span>
                </label>
                <div class="accordion-content">
                  {/* <!-- Content for Section 1 goes here --> */}
                  With a decade of Product Engineering experience, we help
                  organizations across the product lifecycle bringing expertise
                  on full-stack, cloud platforms, pre-configured tools, and
                  scalable architectures.
                </div>
              </div>

              <div class="accordion-item">
                <input type="checkbox" id="section2" class="accordion-input" />
                <label for="section2" class="accordion-header">
                  Data <span class="accordion-icon">+</span>
                </label>
                <div class="accordion-content">
                  {/* <!-- Content for Section 2 goes here --> */}
                  data
                </div>
              </div>

              <div class="accordion-item">
                <input type="checkbox" id="section3" class="accordion-input" />
                <label for="section3" class="accordion-header">
                  Cloud <span class="accordion-icon">+</span>
                </label>
                <div class="accordion-content">
                  {/* <!-- Content for Section 2 goes here --> */}
                  cloud
                </div>
              </div>

              <div class="accordion-item">
                <input type="checkbox" id="section4" class="accordion-input" />
                <label for="section4" class="accordion-header">
                  Machine Learning <span class="accordion-icon">+</span>
                </label>
                <div class="accordion-content">
                  {/* <!-- Content for Section 2 goes here --> */}
                  machine learning
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div>page 2</div> */}
      {/* upper section
       */}

      {/* bottom section */}

      {/* ****
        page 2 end
     **** */}

      {/* ****
        page 3 start
     **** */}
      {/* header section
       */}

      {/* middle content  */}

      {/* leader carousal */}

      {/* ****
        page 3 end
     **** */}

      {/* ****
        page 4 start
     **** */}
      {/* header section
       */}

      {/* member cards  */}

      {/* ****
        page 4 end
     **** */}

      {/* ****
        page 5 start
     **** */}
      {/* header section
       */}

      {/* accordions  */}

      {/* project idea card */}

      {/* ****
        page 5 end
     **** */}

      {/* ****
        page 6 start
     **** */}
      {/* upper  section
       */}

      {/* bottom section  */}

      {/* ****
        page 6 end
     **** */}
    </div>
  );
}

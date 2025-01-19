type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
    logo: (props: IconProps) => (
        <svg
            width="1000"
            {...props}
            height="1000"
            viewBox="0 0 1000 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="1000" height="1000" rx="100" fill="#BEF264" />
            <path
                d="M68.2386 354.091H137.131L203.466 479.375H206.307L272.642 354.091H341.534L235.426 542.159V645H174.347V542.159L68.2386 354.091ZM624.879 499.545C624.879 531.269 618.866 558.258 606.839 580.511C594.908 602.765 578.62 619.763 557.976 631.506C537.427 643.153 514.321 648.977 488.658 648.977C462.805 648.977 439.605 643.106 419.055 631.364C398.506 619.621 382.266 602.623 370.334 580.369C358.402 558.116 352.436 531.174 352.436 499.545C352.436 467.822 358.402 440.833 370.334 418.58C382.266 396.326 398.506 379.375 419.055 367.727C439.605 355.985 462.805 350.114 488.658 350.114C514.321 350.114 537.427 355.985 557.976 367.727C578.62 379.375 594.908 396.326 606.839 418.58C618.866 440.833 624.879 467.822 624.879 499.545ZM562.521 499.545C562.521 478.996 559.444 461.667 553.288 447.557C547.228 433.447 538.658 422.746 527.578 415.455C516.499 408.163 503.525 404.517 488.658 404.517C473.79 404.517 460.817 408.163 449.737 415.455C438.658 422.746 430.04 433.447 423.885 447.557C417.824 461.667 414.794 478.996 414.794 499.545C414.794 520.095 417.824 537.424 423.885 551.534C430.04 565.644 438.658 576.345 449.737 583.636C460.817 590.928 473.79 594.574 488.658 594.574C503.525 594.574 516.499 590.928 527.578 583.636C538.658 576.345 547.228 565.644 553.288 551.534C559.444 537.424 562.521 520.095 562.521 499.545ZM913.764 354.091V645H860.639L734.077 461.903H731.946V645H670.44V354.091H724.418L849.986 537.045H852.543V354.091H913.764Z"
                fill="black"
            />
        </svg>
    ),
    gitHub: (props: IconProps) => (
        <svg viewBox="0 0 438.549 438.549" {...props}>
            <path
                fill="currentColor"
                d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
            ></path>
        </svg>
    ),
};

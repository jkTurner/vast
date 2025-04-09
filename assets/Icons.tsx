interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: number
    color?: string
}

export const HamburgerIcon = ({ size = 24, color = "var(--primary)", ...props }: IconProps) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        {...props}
      >
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    )
}

export const LaurelWreath = ({ size = 53, color = "var(--primary)", ...props }: IconProps) => {
  return (
    <svg
      width={size}
      height={(size * 40) / 53} // maintain aspect ratio
      viewBox="0 0 53 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill={color}>
        <path d="M8.24385 0.512257C7.43632 1.13871 6.978 ... (trimmed for brevity) ..."/>
        <path d="M8.24385 0.512257C7.43632 1.13871 6.978 2.1324 7.10895 2.88846C7.17442 3.19089 7.13077 3.49331 7.04347 3.55812C6.93435 3.62292 6.84705 3.75253 6.84705 3.86054C6.84705 3.96855 7.08712 3.83894 7.37085 3.57972C7.65457 3.3205 8.13472 2.88846 8.41845 2.62924C8.94225 2.1756 9.2478 1.31153 9.2478 0.382646C9.2478 -0.157401 9.05137 -0.135799 8.24385 0.512257Z" fill={color}/>
        <path d="M43.7313 0.620306C43.7313 1.59239 44.2769 2.69408 44.9753 3.14772C45.3027 3.36374 45.6956 3.66617 45.8265 3.81738C45.9793 4.0334 46.0229 3.79578 45.9138 2.9101C45.7829 1.7004 45.1281 0.706713 44.1242 0.166666C43.7968 -0.00614858 43.7313 0.0586569 43.7313 0.620306Z" fill={color}/>
        <path d="M4.88281 2.19719C4.88281 3.36369 5.14471 4.01175 5.82129 4.55179C6.23596 4.85422 6.25779 4.96223 6.01771 5.48067C5.86494 5.8047 5.77764 6.10713 5.82129 6.17193C5.86494 6.21514 6.03954 5.95591 6.19231 5.58868C6.34509 5.24305 6.47604 4.94063 6.51969 4.94063C6.54151 4.94063 6.86889 5.04864 7.23991 5.17825C7.78554 5.37266 8.09109 5.32946 8.94226 4.96223C9.70614 4.6166 9.92439 4.44378 9.74979 4.27097C9.50971 4.03335 8.00379 3.92534 7.19626 4.09815C6.86889 4.16296 6.73794 4.03335 6.60699 3.4501C6.51969 3.06126 6.10501 2.37001 5.66851 1.93797L4.88281 1.1603V2.19719Z" fill={color}/>
        <path d="M47.0269 2.28374C46.6341 2.75898 46.3503 3.34223 46.3503 3.68786C46.3503 4.31431 46.0448 4.65994 45.8047 4.29271C45.6519 4.03349 44.0369 4.03349 43.404 4.27111C43.0111 4.42232 43.0329 4.48713 43.7313 4.91917C44.4734 5.3728 45.3246 5.43761 46.1321 5.07038C46.394 4.96237 46.5468 5.13518 46.765 5.69683C46.9178 6.12887 47.0924 6.4529 47.136 6.38809C47.2015 6.34489 47.136 6.02086 47.0051 5.69683C46.8087 5.17839 46.8523 5.02717 47.4416 4.37912C47.9872 3.75267 48.0963 3.45024 48.0963 2.56456C48.0963 1.95971 48.009 1.48447 47.8999 1.48447C47.7908 1.48447 47.3979 1.8517 47.0269 2.28374Z" fill={color}/>
        <path d="M3.0277 4.33584C3.31143 5.69676 3.9007 6.38802 5.27568 7.01447C5.31933 7.03608 5.2102 7.51131 5.0356 8.09457L4.73005 9.13146L4.48998 8.4618C4.22808 7.70573 3.66063 7.2737 2.30748 6.79845C1.21623 6.40962 1.17258 6.53923 1.95828 7.98656C2.5039 8.95864 3.48603 9.6931 4.27173 9.6931C4.48998 9.6931 4.53363 9.93073 4.48998 10.5572C4.40268 11.4861 4.11895 11.6805 3.9007 11.0108C3.83523 10.7732 3.5515 10.4492 3.26778 10.2764C2.70033 9.90912 0.51783 9.45548 0.51783 9.6931C0.51783 10.0171 1.82733 11.6157 2.28565 11.8749C2.54755 12.0045 3.07135 12.1125 3.48603 12.1341C4.20625 12.1557 4.20625 12.1557 4.1626 13.171L4.11895 14.2079L3.52968 13.6462C3.04953 13.1926 2.65668 13.0414 1.60908 12.9766C0.82338 12.9118 0.29958 12.9766 0.29958 13.1062C0.29958 13.2142 0.73608 13.7111 1.28171 14.2079C2.11105 14.964 2.39478 15.0936 3.22413 15.0936H4.18443L4.27173 16.1737C4.29355 16.7785 4.29355 17.2538 4.27173 17.2538C4.22808 17.2538 3.94435 17.0593 3.6388 16.8217C3.2023 16.4977 2.74398 16.3897 1.60908 16.3897C0.801555 16.3897 0.103156 16.4545 0.0158555 16.5193C-0.202394 16.7569 1.8928 18.3338 2.5912 18.4635C2.96223 18.5283 3.50785 18.4851 3.8134 18.3555C4.35903 18.161 4.40268 18.1826 4.70823 19.3059L5.0356 20.4724L4.40268 20.0188C3.85705 19.6516 3.52968 19.5868 2.3293 19.6948C0.38688 19.846 0.21228 20.1052 1.52178 20.9261C2.39478 21.4877 2.7658 21.5957 3.57333 21.5093C4.11895 21.4661 4.70823 21.3581 4.88283 21.2933C5.1229 21.1637 5.2975 21.3797 5.5594 22.1142C5.75583 22.6542 5.88678 23.0863 5.86495 23.0863C5.84313 23.0863 5.4721 22.9566 5.05743 22.7838C4.48998 22.5462 4.0753 22.5246 3.3769 22.6758C2.46025 22.8702 1.17258 23.4319 1.17258 23.6263C1.17258 23.8423 2.9404 24.5984 3.7261 24.728C4.38085 24.8144 4.81735 24.7496 5.49393 24.404L6.38875 23.9503L6.65065 24.4256C6.80343 24.7064 7.06533 25.1384 7.23993 25.4193C7.54548 25.8945 7.54548 25.8945 6.97803 25.6785C6.65065 25.5705 6.10503 25.4625 5.75583 25.4625C5.10108 25.4625 2.70033 26.4994 2.70033 26.7802C2.70033 27.0394 4.6864 27.6227 5.53758 27.6227C6.03955 27.6227 6.65065 27.4282 7.1308 27.1042L7.89468 26.5858L8.57125 27.4066C8.94228 27.8819 9.24783 28.2923 9.24783 28.3571C9.24783 28.4003 8.9641 28.3787 8.63673 28.2707C8.24388 28.1843 7.72008 28.2059 7.23993 28.3571C6.45423 28.6379 4.88283 29.718 4.88283 29.9989C4.88283 30.2149 6.03955 30.4309 7.26175 30.4309C8.24388 30.4309 9.07323 30.0637 9.61885 29.394C9.8371 29.1348 10.0117 29.1996 10.8629 29.9124L11.8232 30.7549L10.7101 30.8629C9.53155 30.9709 8.74585 31.403 7.6546 32.5479L7.0435 33.1743L8.20023 33.3039C9.90258 33.4984 10.972 33.1959 11.845 32.2454C12.4561 31.5974 12.6525 31.4894 12.9363 31.6838C13.1327 31.835 13.6783 32.159 14.1585 32.4183L15.0315 32.8935L14.0712 33.0663C12.9581 33.2607 12.3252 33.7792 11.4303 35.2265L10.7756 36.2634H11.3867C12.2597 36.2634 13.6347 35.8314 14.3112 35.3777C14.6386 35.1401 15.0751 34.5784 15.2715 34.1032L15.6425 33.2607L16.4282 33.6496C16.8647 33.8656 17.6068 34.168 18.0869 34.3192L18.9381 34.6001L17.8687 34.8809C16.6901 35.1617 15.9917 35.8314 15.0315 37.5379L14.4858 38.4884L15.4025 38.3372C17.9342 37.9483 18.9818 37.3003 19.5929 35.8314L19.9421 34.9673L20.9678 35.1185C21.5571 35.1833 22.2119 35.3129 22.4519 35.3993C22.7793 35.5289 22.7138 35.5721 22.0809 35.7017C21.0551 35.8962 20.1385 36.9115 19.5274 38.5316C19.2655 39.2229 19.0909 39.8061 19.1345 39.8709C19.3091 40.0221 21.6444 39.0716 22.2337 38.5964C22.8666 38.0996 23.6305 36.6522 23.6523 35.9394C23.6523 35.5505 23.7833 35.5073 24.7872 35.5505C26.0312 35.6153 25.9876 35.5073 24.6999 35.2913C23.9579 35.1833 23.8706 35.0969 23.8706 34.5136C23.8706 33.4984 23.2595 32.4399 22.2773 31.727C21.7754 31.3814 21.2952 31.0789 21.2079 31.0789C21.1206 31.0789 21.0333 31.403 21.0333 31.7702C21.0333 33.0231 21.448 34.06 22.19 34.6433C22.9321 35.2481 22.9103 35.2481 21.1206 34.7297L20.204 34.4704L20.3131 33.2607C20.444 31.943 20.2258 31.3382 19.2218 30.1069L18.6762 29.4588L18.4361 30.3229C18.0869 31.5974 18.1524 32.6127 18.6326 33.3903C18.8726 33.7792 19.0036 34.1032 18.9599 34.1032C18.8945 34.1032 18.2179 33.8224 17.4322 33.4768L16.0354 32.8503L16.4719 32.0078C16.7556 31.4894 16.8647 30.9493 16.7993 30.4957C16.6683 29.6316 15.8826 27.8387 15.6425 27.8387C15.337 27.8387 14.7041 29.7828 14.7041 30.6469C14.7041 31.0789 14.8568 31.6406 15.0533 31.8998C15.5116 32.5479 15.3152 32.5047 14.0493 31.5974C13.089 30.9061 13.0017 30.7981 13.2855 30.4957C13.9402 29.8692 13.9839 28.5731 13.4164 27.1042C13.22 26.6074 13.1109 26.5426 12.849 26.7586C12.3033 27.1906 11.8232 29.0052 12.0633 29.6532C12.1942 29.9557 12.2597 30.2149 12.216 30.2149C12.1942 30.2149 11.7577 29.8476 11.2776 29.394L10.3827 28.5947L10.9065 27.9899C11.2776 27.5578 11.4303 27.1258 11.4303 26.4562C11.4303 25.3329 11.0375 24.1231 10.7319 24.296C10.2518 24.5984 9.4879 26.6074 9.61885 27.277L9.7498 27.9467L9.09505 27.0826L8.4403 26.2185L9.0514 25.5057C9.5752 24.9224 9.68433 24.5984 9.68433 23.6263C9.68433 22.9999 9.59703 22.4166 9.4879 22.3302C9.1387 22.1358 8.04745 23.6695 7.93833 24.5336L7.8292 25.3545L7.32723 24.512C6.84708 23.7343 6.84708 23.6695 7.2181 23.3887C7.43635 23.2375 7.67643 23.0863 7.76373 23.0863C8.2657 23.0647 9.09505 20.062 8.6149 20.062C8.1784 20.062 6.67248 21.5741 6.5197 22.179L6.36693 22.7622L6.06138 22.0278C5.66853 21.1205 5.66853 20.7101 6.06138 20.7101C6.67248 20.7101 7.52365 19.738 7.8292 18.7011C8.0038 18.1394 8.0911 17.6858 8.02563 17.6858C7.96015 17.6858 7.54548 17.8802 7.06533 18.1178C6.12685 18.5931 5.53758 19.2843 5.51575 19.954C5.51575 20.386 5.51575 20.386 5.34115 19.954C5.23203 19.7164 5.10108 19.1547 5.01378 18.7011C4.90465 18.0746 4.92648 17.9018 5.18838 17.9018C5.95225 17.9018 6.65065 17.3402 7.17445 16.3033C7.50183 15.6768 7.63278 15.18 7.50183 15.1368C7.06533 14.9856 5.6467 15.8712 5.16655 16.5841L4.66458 17.3186V16.5409C4.66458 16.1305 4.5991 15.6336 4.53363 15.4608C4.44633 15.2448 4.64275 15.1152 5.16655 15.0072C5.58123 14.9424 6.10503 14.6615 6.3451 14.3807C6.89073 13.8191 7.5673 12.5013 7.43635 12.3501C7.19628 12.1125 5.05743 13.2574 4.7737 13.7759C4.44633 14.3159 4.44633 14.3159 4.5118 13.2574C4.55545 12.2205 4.57728 12.1773 5.14473 12.2421C6.10503 12.3501 7.72008 11.27 7.72008 10.4924C7.72008 10.1251 5.6467 10.5788 5.1229 11.054L4.5991 11.5293L4.75188 10.7948C4.81735 10.406 4.88283 9.99553 4.88283 9.88752C4.88283 9.77951 5.16655 9.75791 5.51575 9.82272C6.23598 9.97393 7.15263 9.56349 7.9165 8.74262L8.4403 8.18097H7.23993C6.32328 8.18097 5.95225 8.28898 5.6467 8.61301C5.10108 9.19626 5.01378 9.02345 5.34115 7.98656C5.5594 7.2737 5.69035 7.12248 5.95225 7.25209C6.84708 7.64093 9.0514 7.01447 8.7022 6.45282C8.46213 6.06399 6.84708 5.97758 6.27963 6.32321C5.77765 6.66884 5.734 6.66884 5.62488 6.30161C5.2975 5.24312 5.0356 4.89749 4.20625 4.29264C3.04953 3.47177 2.8531 3.47177 3.0277 4.33584ZM4.62093 23.6695C4.66458 23.8423 4.48998 23.9503 4.14078 23.9503C3.59515 23.9503 3.42055 23.7343 3.7261 23.4319C3.94435 23.2159 4.5118 23.3671 4.62093 23.6695ZM6.41058 26.5426C6.41058 26.6506 6.06138 26.7586 5.62488 26.7586C5.16655 26.7586 4.90465 26.6722 4.99195 26.5426C5.05743 26.4129 5.40663 26.3265 5.77765 26.3265C6.12685 26.3265 6.41058 26.4129 6.41058 26.5426ZM8.37483 29.1348C8.37483 29.3724 7.32723 29.6748 7.1308 29.4804C7.06533 29.4156 7.23993 29.2644 7.52365 29.1564C8.22205 28.8756 8.37483 28.8756 8.37483 29.1348ZM11.2121 31.727C11.2121 31.9646 10.5137 32.3751 9.88075 32.4831C9.29148 32.5911 9.35695 32.0726 9.96805 31.7702C10.5792 31.4678 11.2121 31.4462 11.2121 31.727ZM22.7575 33.4984C22.8666 33.7792 22.9103 34.0384 22.8448 34.1032C22.7357 34.2328 22.1246 33.4552 22.1246 33.1959C22.1246 32.8287 22.5829 33.0447 22.7575 33.4984ZM14.2239 34.1464C14.1585 34.2976 13.7874 34.6217 13.3946 34.8377C12.6525 35.2697 12.6307 35.0969 13.3509 34.2544C13.722 33.8224 14.3549 33.7576 14.2239 34.1464ZM18.5453 36.0258C18.2179 36.6306 16.7556 37.5163 16.4937 37.2355C16.1663 36.9115 17.8469 35.3993 18.5671 35.3993C18.8072 35.3993 18.8072 35.5073 18.5453 36.0258ZM22.5611 36.717C22.5611 37.2139 21.3825 38.4236 20.9024 38.4236C20.3567 38.4236 20.575 37.7323 21.3825 36.9979C22.2773 36.1554 22.5611 36.0906 22.5611 36.717Z" fill={color}/>
        <path d="M48.8601 4.33582C48.1836 4.78946 47.7253 5.2863 47.5725 5.73994C47.2669 6.64722 47.0923 6.77683 46.6777 6.4528C46.3503 6.19358 44.517 6.23679 44.2333 6.53922C44.015 6.75523 44.8662 7.29528 45.6519 7.44649C46.0666 7.5329 46.6122 7.4897 46.8959 7.36008C47.3324 7.16567 47.3979 7.18727 47.507 7.70572C47.5725 8.02974 47.7034 8.48338 47.7907 8.721C47.9435 9.15304 47.9435 9.15304 47.4852 8.7426C47.1578 8.46178 46.5685 8.28896 45.7392 8.24576L44.4952 8.15935L45.4336 9.04503C46.263 9.8443 46.4812 9.95231 47.2451 9.8659C47.7907 9.8227 48.0963 9.8875 48.0963 10.0387C48.0963 10.1683 48.1617 10.622 48.2491 11.0108L48.38 11.7453L47.9435 11.2268C47.5943 10.8164 47.2451 10.6868 46.2193 10.622L44.9317 10.5356L45.8483 11.3996C46.6122 12.1341 46.9177 12.2853 47.6598 12.2853H48.5328V13.279V14.2943L48.0744 13.711C47.6161 13.1278 47.1141 12.8686 46.0011 12.5877L45.4336 12.4365L46.0011 13.5382C46.6122 14.7263 47.0705 15.0935 48.009 15.0935C48.4891 15.0935 48.5546 15.1584 48.4455 15.5688C48.38 15.8496 48.3145 16.4113 48.3145 16.8217V17.5778L47.9217 16.8433C47.6816 16.3465 47.2015 15.9144 46.5685 15.612C45.39 15.0071 45.2154 15.2664 45.9138 16.6057C46.263 17.2753 46.6122 17.5994 47.2451 17.8586C48.0526 18.161 48.0963 18.2258 47.9653 18.8523C47.7471 19.8244 47.4634 20.4724 47.4634 20.0404C47.4415 19.4787 46.5904 18.5715 45.6737 18.0962L44.8007 17.6642L44.9535 18.269C45.259 19.5435 45.892 20.4508 46.634 20.7316L47.376 20.9909L47.0487 21.8333L46.6995 22.6974L46.3066 21.9197C45.892 21.1205 44.3424 19.8892 44.2114 20.278C44.1678 20.4076 44.2551 20.9909 44.386 21.5957C44.5825 22.3734 44.8444 22.827 45.3682 23.2375L46.0884 23.8207L45.6301 24.6848L45.1717 25.5705L45.0408 24.7064C44.888 23.6479 43.7531 22.0494 43.4912 22.4814C43.142 23.0214 43.273 24.6848 43.7313 25.3976C43.9714 25.7865 44.2551 26.1105 44.386 26.1105C44.7352 26.1105 44.6261 26.3913 43.9714 27.1474L43.3603 27.8603V26.9962C43.3603 26.4561 43.142 25.7649 42.7492 25.1168C42.2254 24.2527 42.1162 24.1663 41.9416 24.4688C41.8107 24.6848 41.6797 25.4192 41.6143 26.1105C41.5051 27.1906 41.5706 27.4714 41.9853 28.0547L42.4654 28.7459L41.7452 29.4804C40.9377 30.3013 40.5448 30.4525 40.894 29.7828C41.025 29.5452 41.0468 29.0916 40.9813 28.7675C40.7631 27.8603 40.021 26.5209 39.8246 26.6289C39.4754 26.845 39.0826 28.7027 39.2135 29.502C39.3008 29.934 39.4972 30.4309 39.6718 30.6253C39.9774 30.9061 39.9119 31.0141 38.9953 31.6622C37.8822 32.4398 37.6639 32.4614 38.0568 31.7054C38.3842 31.1221 38.2314 29.7396 37.7294 28.5947L37.3584 27.7306L36.7255 29.0268C35.9834 30.5605 35.9398 31.0357 36.529 32.1374L36.9437 32.9583L35.4378 33.6279C33.8446 34.3192 33.6481 34.3192 34.3029 33.6063C34.6957 33.1743 34.8267 30.9493 34.4993 30.1284C34.3465 29.7396 34.3247 29.7396 33.8882 30.1284C33.0152 30.9061 32.5569 32.1158 32.6442 33.4119L32.7097 34.6L31.7275 34.8809C30.3744 35.2913 30.2653 35.2697 30.92 34.6648C31.5748 34.06 32.0113 32.7855 31.9021 31.7702L31.8367 31.0357L30.92 31.7054C29.6978 32.5695 29.2613 33.3039 29.2395 34.384L29.2177 35.2913L28.1264 35.4209L27.0352 35.5505L28.1919 35.5721C29.2177 35.6153 29.3268 35.6585 29.3268 36.0906C29.3486 37.1058 30.1343 38.3588 31.1164 38.942C32.3168 39.6333 33.91 40.1949 33.91 39.9357C33.91 39.8061 33.7136 39.2228 33.4954 38.6396C32.8624 36.9978 32.0767 36.1122 31.0291 35.7881L30.1125 35.5289L31.5093 35.2913L32.9279 35.0753L33.4735 36.1338C33.8882 36.9546 34.2592 37.3435 35.0013 37.7107C36.0489 38.2507 38.275 38.6396 38.275 38.2723C38.275 37.9483 37.0747 36.1986 36.4854 35.6585C36.2017 35.3993 35.5251 35.0321 34.9795 34.8809C34.4557 34.708 34.2156 34.5568 34.4557 34.5568C34.6957 34.5352 35.416 34.2976 36.0489 33.9952C36.7036 33.6928 37.2493 33.4551 37.2929 33.4551C37.3147 33.4551 37.4675 33.736 37.6203 34.0816C38.035 35.0969 38.9516 35.7881 40.3484 36.1338C42.269 36.6306 42.3127 36.609 41.7234 35.5721C40.9377 34.168 39.9556 33.3039 38.9298 33.1311L38.035 32.9799L39.1917 32.2886L40.3484 31.5758L40.8722 32.2238C41.5924 33.0879 42.5746 33.4551 44.146 33.4551C45.8265 33.4551 46.0229 33.1527 44.9098 32.2022C43.644 31.1005 42.9238 30.7981 41.9198 30.9277L41.0686 31.0357L42.0289 30.1284L42.9674 29.2212L43.6658 29.8044C44.6916 30.6901 45.8265 30.8197 47.7253 30.2797C48.1181 30.1717 48.1181 30.1717 47.7253 29.7396C46.8959 28.8323 45.5209 28.2059 44.6043 28.3355L43.7313 28.4435L44.3424 27.601C44.6698 27.1474 44.9753 26.8018 45.0408 26.8234C45.1063 26.8666 45.6301 27.1258 46.2193 27.385L47.3106 27.9035L48.7292 27.493C49.5149 27.2554 50.1478 26.9962 50.126 26.8882C50.126 26.7586 49.624 26.4345 49.0566 26.1321C47.9872 25.5705 46.8522 25.4408 45.9574 25.7433C45.4773 25.9161 45.4773 25.8945 46.0666 24.9656L46.6777 24.0151L47.3324 24.4256C47.6816 24.6416 48.3582 24.8144 48.8165 24.8144C49.6677 24.8144 51.8065 24.0367 51.8065 23.7343C51.8065 23.4535 49.6895 22.6542 48.9693 22.6542C48.5982 22.6542 47.9872 22.8054 47.6161 22.9998C46.9832 23.3239 46.9396 23.3239 47.1141 22.9566C47.2015 22.719 47.3979 22.2438 47.5288 21.8765C47.7689 21.2285 47.7689 21.2285 48.5328 21.5309C48.9474 21.6821 49.5585 21.7685 49.9296 21.7037C50.5843 21.5741 52.4613 20.494 52.4613 20.2348C52.4613 20.17 51.9593 19.9972 51.37 19.846C50.1478 19.5435 48.9256 19.6947 48.5328 20.17C48.0308 20.7532 47.9435 20.494 48.2709 19.4355L48.5982 18.3986L49.5367 18.5066C50.2788 18.5715 50.6716 18.485 51.4137 18.053C51.9375 17.7506 52.5267 17.3185 52.745 17.0809C53.1597 16.6489 53.1378 16.6273 52.1557 16.4977C50.868 16.3033 49.7113 16.5193 49.1657 17.0593C48.9474 17.2753 48.7292 17.4698 48.7074 17.4698C48.6637 17.4698 48.6855 16.9945 48.7074 16.3897C48.7947 15.3096 48.7947 15.3096 49.5367 15.3096C50.5407 15.3096 51.4355 14.8343 52.1121 13.9487C52.8323 13.0414 52.8105 12.9334 52.0902 12.9334C51.0645 12.9334 49.8204 13.387 49.3185 13.9054L48.8383 14.4239L48.8165 13.3438C48.7947 12.3069 48.8165 12.2853 49.4494 12.2853C49.7986 12.2853 50.3442 12.1557 50.6934 11.9829C51.3045 11.6589 52.5922 9.97391 52.374 9.73629C52.3085 9.67148 51.6974 9.73629 51.0426 9.8875C50.1042 10.1035 49.7113 10.3195 49.1875 10.946L48.5328 11.7453V11.054C48.5328 10.6868 48.4891 10.2331 48.4236 10.0819C48.3363 9.8659 48.5764 9.71469 49.2312 9.56347C49.9514 9.41226 50.2788 9.17464 50.7371 8.50498C51.4791 7.42489 51.7192 6.66882 51.3264 6.66882C51.1736 6.66882 50.5407 6.90644 49.9296 7.18727C49.122 7.5545 48.751 7.87853 48.5328 8.41858L48.2272 9.13144L47.9435 8.18095C47.7907 7.64091 47.7253 7.18727 47.8125 7.14407C48.7292 6.84164 49.4058 6.17198 49.7331 5.1783C49.9296 4.57344 50.0605 3.96859 50.0169 3.83898C49.9732 3.70937 49.4712 3.92539 48.8601 4.33582ZM49.624 23.7343C49.624 23.8423 49.253 23.9503 48.8165 23.9503C48.2054 23.9503 48.0744 23.8855 48.3145 23.7343C48.751 23.4535 49.624 23.4535 49.624 23.7343ZM47.9435 26.4561C48.0308 26.5425 48.0526 26.6721 47.9872 26.7586C47.8562 26.953 46.5685 26.7586 46.5685 26.5209C46.5685 26.3049 47.7253 26.2617 47.9435 26.4561ZM45.6955 29.3508C45.8701 29.4588 45.9356 29.61 45.8701 29.6964C45.6519 29.8908 44.6043 29.61 44.6043 29.3508C44.6043 29.07 45.259 29.07 45.6955 29.3508ZM43.1857 31.9862C43.4912 32.1158 43.7313 32.3318 43.7313 32.4398C43.7313 32.7423 42.3781 32.4398 41.9853 32.051C41.7016 31.7702 41.7234 31.727 42.1381 31.727C42.4 31.727 42.8801 31.835 43.1857 31.9862ZM39.8901 34.5568C40.1302 34.7728 40.2611 35.0321 40.1738 35.0969C39.9337 35.3345 38.9734 34.8161 38.7115 34.3192C38.4715 33.8872 38.4933 33.8656 38.9734 33.9952C39.2353 34.0816 39.6718 34.3192 39.8901 34.5568ZM35.4378 35.8745C36.7691 36.7818 36.9219 37.6459 35.656 37.1274C35.0013 36.8682 34.1283 35.9826 34.1283 35.5937C34.1283 35.2481 34.6957 35.3777 35.4378 35.8745ZM31.6839 37.1274C31.9458 37.3651 32.164 37.6675 32.164 37.7755C32.164 37.8619 32.2295 38.1211 32.295 38.294C32.4914 38.7908 31.793 38.51 31.0291 37.8187C30.3307 37.1707 30.1561 36.1122 30.8109 36.4578C31.0073 36.5658 31.4002 36.8682 31.6839 37.1274Z" fill={color}/>
      </g>
    </svg>
  )
}

export const QuoteOpenIcon = ({ size = 17, color = "var(--primary)", ...props }: IconProps) => {
  return (
    <svg
      width={size}
      height={(size * 13) / 17} // maintain original aspect ratio
      viewBox="0 0 17 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 12.6502V8.89169C0 7.82446 0.208807 6.73402 0.62642 5.62038C1.04403 4.50675 1.59505 3.45691 2.27947 2.47088C2.9639 1.48485 3.70632 0.66122 4.50675 0L7.77805 1.93146C7.12843 2.9523 6.59481 4.01953 6.1772 5.13317C5.77119 6.2468 5.56818 7.48804 5.56818 8.85689V12.6502H0ZM8.78729 12.6502V8.89169C8.78729 7.82446 8.99609 6.73402 9.41371 5.62038C9.83132 4.50675 10.3823 3.45691 11.0668 2.47088C11.7512 1.48485 12.4936 0.66122 13.294 0L16.5653 1.93146C15.9157 2.9523 15.3821 4.01953 14.9645 5.13317C14.5585 6.2468 14.3555 7.48804 14.3555 8.85689V12.6502H8.78729Z"
        fill={color}
      />
    </svg>
  );
};

export const QuoteCloseIcon = ({ size = 17, color = "var(--primary)", ...props }: IconProps) => {
  return (
    <svg
      width={size}
      height={(size * 13) / 17} // maintain original aspect ratio
      viewBox="0 0 17 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.5653 -6.67572e-05L16.5653 3.75846C16.5653 4.82569 16.3565 5.91613 15.9389 7.02976C15.5213 8.1434 14.9703 9.19323 14.2859 10.1793C13.6014 11.1653 12.859 11.9889 12.0586 12.6501L8.78728 10.7187C9.43691 9.69785 9.97052 8.63061 10.3881 7.51698C10.7942 6.40334 10.9972 5.1621 10.9972 3.79326L10.9972 -6.7244e-05L16.5653 -6.67572e-05ZM7.77805 -6.75254e-05L7.77805 3.75846C7.77805 4.82569 7.56924 5.91613 7.15163 7.02976C6.73402 8.1434 6.183 9.19323 5.49858 10.1793C4.81415 11.1653 4.07173 11.9889 3.2713 12.6501L-3.64584e-06 10.7187C0.649618 9.69785 1.18324 8.63061 1.60085 7.51698C2.00686 6.40334 2.20987 5.1621 2.20987 3.79326L2.20987 -6.80122e-05L7.77805 -6.75254e-05Z"
        fill={color}
      />
    </svg>
  );
};

export const BubblePointerIcon = ({ size = 26, color = "var(--primary)", ...props }: IconProps) => {
  return (
    <svg
      width={size}
      height={(size * 27) / 26} // maintain original aspect ratio
      viewBox="0 0 26 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.5574 27L0 0L25.1147 0L12.5574 27Z"
        fill={color}
      />
    </svg>
  );
};

export const FacebookIcon = ({ size = 32, color = "var(--primary)", ...props }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.9997 0C7.1634 0 0 7.16355 0 15.9997C0 24.8356 7.1634 32 15.9997 32C24.836 32 32 24.8359 32 15.9997C31.9997 7.16355 24.836 0 15.9997 0ZM21.4639 10.2346C21.4639 10.3873 21.3402 10.5113 21.1873 10.5113H17.2922V12.6047H21.187C21.34 12.6047 21.4636 12.7286 21.4636 12.8813V16.7757C21.4636 16.9287 21.34 17.0524 21.187 17.0524H17.5689V25.5986C17.5689 25.7516 17.4452 25.8753 17.2922 25.8753H13.6114C13.4584 25.8753 13.3347 25.7516 13.3347 25.5986V17.0527H10.8125C10.6595 17.0527 10.5358 16.929 10.5358 16.776V12.8816C10.5358 12.7289 10.6595 12.605 10.8125 12.605H13.3347V11.0258C13.3347 11.0032 13.3375 10.9813 13.3425 10.9603C13.3447 8.71085 13.8258 6.13746 17.5111 6.12584C17.5191 6.12529 17.5277 6.12473 17.536 6.12473H21.187C21.34 6.12473 21.4636 6.24867 21.4636 6.40138L21.4639 10.2346Z"
        fill={color}
      />
    </svg>
  );
};

export const LineIcon = ({ size = 32, color = "var(--primary)", ...props }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M13.8253 13.1177C13.688 13.1177 13.5757 13.165 13.4891 13.2604C13.4025 13.3556 13.3594 13.4981 13.3594 13.6881V17.3483C13.3594 17.5386 13.4031 17.6816 13.4908 17.7776C13.5782 17.8742 13.6897 17.9218 13.8253 17.9218C13.9669 17.9218 14.0814 17.8745 14.1689 17.779C14.2563 17.6838 14.3003 17.5405 14.3003 17.348V13.6879C14.3003 13.4956 14.2566 13.3526 14.1689 13.2582C14.0814 13.1647 13.9669 13.1177 13.8253 13.1177Z" fill={color}/>
      <path d="M18.8163 13.1177C18.6854 13.1177 18.5811 13.1628 18.5045 13.2524C18.4273 13.3423 18.3889 13.477 18.3889 13.6563V16.4198L16.5793 13.6818C16.5284 13.6015 16.4794 13.5246 16.4318 13.4505C16.3842 13.3763 16.3378 13.3163 16.2924 13.2701C16.247 13.2236 16.1942 13.1866 16.1341 13.1589C16.0741 13.1315 16.0014 13.118 15.917 13.118C15.8088 13.118 15.7089 13.1481 15.616 13.2084C15.523 13.2685 15.4561 13.3462 15.416 13.4411C15.3825 13.5277 15.3656 13.6472 15.3656 13.7991V17.3831C15.3656 17.5585 15.4057 17.6919 15.4862 17.7837C15.5662 17.8756 15.6727 17.9218 15.806 17.9218C15.9347 17.9218 16.0406 17.8761 16.1228 17.7854C16.2055 17.6946 16.2465 17.5605 16.2465 17.3831V14.6611L18.0118 17.3674C18.0621 17.4415 18.1128 17.5137 18.1637 17.5845C18.2146 17.6554 18.2696 17.717 18.3286 17.7699C18.388 17.8227 18.4511 17.8612 18.5189 17.8855C18.5867 17.9099 18.6628 17.922 18.7469 17.922C19.0852 17.922 19.2542 17.7182 19.2542 17.3106V13.6563C19.2542 13.4768 19.2147 13.342 19.1369 13.2524C19.0584 13.1628 18.9513 13.1177 18.8163 13.1177Z" fill={color}/>
      <path d="M12.2321 17.0694H10.3243V13.6881C10.3243 13.4959 10.2806 13.3528 10.1923 13.2585C10.1049 13.1647 9.99034 13.1177 9.8487 13.1177C9.70926 13.1177 9.59694 13.165 9.51146 13.2604C9.42542 13.3556 9.38281 13.4981 9.38281 13.6881V17.2658C9.38281 17.4686 9.42763 17.6158 9.51727 17.7065C9.60746 17.7973 9.75436 17.8426 9.95991 17.8426H12.2321C12.3862 17.8426 12.5032 17.8075 12.5837 17.7364C12.6637 17.6653 12.7043 17.5729 12.7043 17.4589C12.7043 17.3472 12.6634 17.2542 12.5818 17.1801C12.5004 17.1065 12.384 17.0694 12.2321 17.0694Z" fill={color}/>
      <path d="M16.5 0C7.66312 0 0.5 7.1634 0.5 16C0.5 24.8363 7.6634 32 16.5 32C25.336 32 32.5 24.836 32.5 16C32.4997 7.1634 25.336 0 16.5 0ZM26.1444 17.0386C25.6462 18.4132 24.7407 19.6391 23.545 20.6179C21.8159 22.2385 19.8204 23.5131 18.5708 24.4039C16.2355 26.0683 15.7389 25.9385 15.5331 25.7294C15.3087 25.5014 15.947 24.5248 16.0026 23.6307C16.0322 23.1432 15.5411 22.998 15.4006 22.9731C10.3511 22.5149 6.42012 18.935 6.42012 14.5868C6.42012 9.92745 10.9326 6.15029 16.4992 6.15029C22.0652 6.15029 26.5782 9.92745 26.5782 14.5868C26.6048 15.4614 26.4427 16.2772 26.1444 17.0386Z" fill={color}/>
      <path d="M23.4178 17.0948H21.225V15.7732H23.1774C23.3226 15.7732 23.4308 15.7397 23.4999 15.6733C23.5702 15.607 23.6048 15.5209 23.6048 15.4152C23.6048 15.3096 23.5697 15.2246 23.4988 15.1602C23.428 15.096 23.3204 15.0636 23.1774 15.0636H21.225V13.9227H23.3447C23.495 13.9227 23.6062 13.8892 23.6792 13.8228C23.7523 13.7564 23.7885 13.6682 23.7885 13.5583C23.7885 13.4504 23.7523 13.3633 23.6792 13.2969C23.6062 13.2305 23.495 13.197 23.3447 13.197H20.8604C20.7276 13.197 20.6183 13.2167 20.5323 13.2557C20.4468 13.295 20.3843 13.3569 20.3436 13.4427C20.3035 13.5285 20.2836 13.6386 20.2836 13.7738V17.266C20.2836 17.4688 20.3284 17.616 20.418 17.7068C20.5077 17.7975 20.6551 17.8429 20.8601 17.8429H23.4175C23.5655 17.8429 23.677 17.8083 23.752 17.7397C23.8267 17.6713 23.8643 17.582 23.8643 17.4722C23.8643 17.3579 23.8264 17.2666 23.752 17.198C23.6773 17.1288 23.5661 17.0948 23.4178 17.0948Z" fill={color}/>
    </svg>
  );
};

export const TwitterIcon = ({ size = 32, color = "var(--primary)", ...props }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM13.7925 16.956L6.14468 6.73032H12.039L17.0528 13.4341L23.2579 6.73032H24.9901L17.8266 14.4692L25.9049 25.27H20.0106L14.5667 17.9908L7.82868 25.27H6.09648L13.7925 16.956ZM11.3998 8.00612H8.69196L20.6495 23.9942H23.3573L11.3998 8.00612Z"
        fill={color}
      />
    </svg>
  );
};


export const WhatsappIcon = ({ size = 32, color = "var(--primary)", ...props }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_435_69)">
      <path d="M23.6784 18.3877C23.616 18.3577 21.2831 17.209 20.8686 17.0598C20.6993 16.999 20.518 16.9397 20.3252 16.9397C20.0102 16.9397 19.7456 17.0967 19.5394 17.405C19.3064 17.7514 18.601 18.576 18.383 18.8224C18.3545 18.8549 18.3157 18.8937 18.2924 18.8937C18.2715 18.8937 17.9105 18.7451 17.8012 18.6976C15.2986 17.6105 13.3991 14.9964 13.1386 14.5556C13.1014 14.4922 13.0999 14.4634 13.0996 14.4634C13.1087 14.4298 13.1929 14.3455 13.2363 14.302C13.3633 14.1762 13.501 14.0105 13.6342 13.8502C13.6973 13.7743 13.7604 13.6982 13.8225 13.6265C14.0157 13.4017 14.1017 13.2271 14.2015 13.025L14.2537 12.9199C14.4973 12.4361 14.2893 12.0278 14.222 11.8959C14.1669 11.7856 13.1818 9.40824 13.0771 9.15847C12.8253 8.55577 12.4925 8.27515 12.03 8.27515C11.9871 8.27515 12.03 8.27515 11.8501 8.28273C11.631 8.29198 10.4377 8.44907 9.91015 8.78164C9.35067 9.13437 8.40417 10.2587 8.40417 12.2361C8.40417 14.0157 9.53353 15.696 10.0184 16.3351C10.0305 16.3512 10.0526 16.3839 10.0847 16.4309C11.9416 19.1428 14.2565 21.1525 16.6032 22.09C18.8625 22.9924 19.9323 23.0968 20.5405 23.0968H20.5406C20.7962 23.0968 21.0007 23.0767 21.1812 23.0589L21.2957 23.048C22.0762 22.9788 23.7913 22.0901 24.1814 21.006C24.4887 20.152 24.5698 19.219 24.3653 18.8804C24.2253 18.6502 23.9839 18.5344 23.6784 18.3877Z" fill={color}/>
      <path d="M16.284 0C7.61743 0 0.566625 6.99782 0.566625 15.5993C0.566625 18.3813 1.31114 21.1045 2.72153 23.4879L0.0220018 31.451C-0.0282839 31.5995 0.00911872 31.7636 0.118937 31.8754C0.19821 31.9564 0.305742 32 0.41556 32C0.457638 32 0.500028 31.9937 0.541378 31.9805L8.84475 29.3419C11.117 30.5559 13.6851 31.1968 16.2841 31.1968C24.9499 31.1969 32 24.1998 32 15.5993C32 6.99782 24.9499 0 16.284 0ZM16.284 27.9474C13.8384 27.9474 11.4697 27.2412 9.43353 25.9051C9.36507 25.8602 9.28559 25.8371 9.20559 25.8371C9.1633 25.8371 9.12091 25.8435 9.07966 25.8566L4.92018 27.1788L6.26294 23.2174C6.30637 23.0891 6.28465 22.9477 6.20465 22.8384C4.65411 20.7198 3.83447 18.2166 3.83447 15.5993C3.83447 8.78961 9.4193 3.24945 16.2839 3.24945C23.1477 3.24945 28.7319 8.78961 28.7319 15.5993C28.732 22.4081 23.1479 27.9474 16.284 27.9474Z" fill={color} />
      </g>
      <defs>
      <clipPath id="clip0_435_69">
      <rect width={size} height={size} fill={color} />
      </clipPath>
      </defs>
    </svg>
  );
};

export const ArrowUpIcon = ({
  size = 26,
  color = "var(--primary)",
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={(size * 15) / 26} // maintain original aspect ratio (size x height) / size
      viewBox="0 0 26 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M-0.000176395 13.0075C-0.00127539 13.1976 0.0351576 13.386 0.107035 13.562C0.178912 13.738 0.284821 13.898 0.418684 14.033C0.552955 14.1683 0.712699 14.2758 0.888706 14.3491C1.06471 14.4225 1.2535 14.4602 1.44417 14.4602C1.63484 14.4602 1.82362 14.4225 1.99963 14.3491C2.17563 14.2758 2.33538 14.1683 2.46965 14.033L12.9989 3.48927L23.5282 14.033C23.8001 14.3049 24.169 14.4577 24.5537 14.4577C24.7441 14.4577 24.9327 14.4202 25.1086 14.3473C25.2846 14.2745 25.4445 14.1676 25.5791 14.033C25.7138 13.8983 25.8206 13.7384 25.8935 13.5625C25.9664 13.3865 26.0039 13.1979 26.0039 13.0075C26.0039 12.6229 25.8511 12.254 25.5791 11.982L14.0244 0.42726C13.8901 0.291884 13.7304 0.184431 13.5544 0.111103C13.3784 0.037776 13.1896 2.44406e-05 12.9989 2.44383e-05C12.8082 2.4436e-05 12.6195 0.037776 12.4434 0.111103C12.2674 0.184431 12.1077 0.291884 11.9734 0.42726L0.418684 11.982C0.284821 12.117 0.178912 12.277 0.107035 12.453C0.0351576 12.629 -0.00127538 12.8174 -0.000176395 13.0075Z"
        fill={color}
      />
    </svg>
  );
};


export const ArrowDownIcon = ({
  size = 26,
  color = "var(--primary)",
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={(size * 15) / 26} // maintain original aspect ratio (size x height) / size
      viewBox="0 0 26 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M26.0041 1.45272C26.0052 1.26263 25.9687 1.0742 25.8969 0.898227C25.825 0.722251 25.7191 0.562195 25.5852 0.427235C25.451 0.291859 25.2912 0.184409 25.1152 0.111081C24.9392 0.037754 24.7504 1.08187e-06 24.5597 1.07354e-06C24.3691 1.06521e-06 24.1803 0.037754 24.0043 0.111081C23.8283 0.184409 23.6685 0.291859 23.5343 0.427235L13.005 10.9709L2.47574 0.427234C2.20376 0.155259 1.83488 0.00246569 1.45025 0.00246567C1.2598 0.00246566 1.07122 0.0399766 0.895265 0.112859C0.719312 0.185741 0.559438 0.292566 0.424769 0.427234C0.290101 0.561903 0.183276 0.721777 0.110394 0.89773C0.0375123 1.07368 -5.51755e-08 1.26227 -6.35003e-08 1.45272C-8.03131e-08 1.83735 0.152794 2.20623 0.424769 2.4782L11.9795 14.0329C12.1138 14.1683 12.2735 14.2758 12.4495 14.3491C12.6255 14.4224 12.8143 14.4602 13.005 14.4602C13.1957 14.4602 13.3844 14.4224 13.5605 14.3491C13.7365 14.2758 13.8962 14.1683 14.0305 14.0329L25.5852 2.4782C25.7191 2.34324 25.825 2.18319 25.8969 2.00721C25.9687 1.83124 26.0052 1.6428 26.0041 1.45272Z"
        fill={color}
      />
    </svg>
  );
};


export const CheckIcon = ({ size = 32, color = "var(--primary)", ...props }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5.74991 10.75C5.55097 10.75 5.36028 10.6711 5.21966 10.5304L0.719656 6.03025C0.426781 5.73737 0.426781 5.26262 0.719656 4.96975C1.01253 4.67687 1.48747 4.67687 1.78016 4.96975L5.74991 8.9395L14.2197 0.469748C14.5125 0.176873 14.9875 0.176873 15.2802 0.469748C15.573 0.762623 15.573 1.23756 15.2802 1.53044L6.28016 10.5304C6.13953 10.6711 5.94884 10.75 5.74991 10.75Z" fill={color} />
      </svg>
  );
};


export const XIcon = ({ size = 32, color = "var(--primary)", ...props }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M19 1.30005L1 19.3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1 1.30005L19 19.3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
  );
};
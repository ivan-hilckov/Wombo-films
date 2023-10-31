import styles from './Header.module.css';
import NavDropdown from 'react-bootstrap/NavDropdown';

const menu__icon = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.99719 5C2.44646 5 2 4.55228 2 4C2 3.44772 2.44646 3 2.99719 3H17.0028C17.5535 3 18 3.44772 18 4C18 4.55228 17.5535 5 17.0028 5H2.99719Z" fill="white" />
        <path d="M2.99719 11C2.44646 11 2 10.5523 2 10C2 9.44772 2.44646 9 2.99719 9H17.0028C17.5535 9 18 9.44772 18 10C18 10.5523 17.5535 11 17.0028 11H2.99719Z" fill="white" />
        <path d="M2.99719 17C2.44646 17 2 16.5523 2 16C2 15.4477 2.44646 15 2.99719 15H17.0028C17.5535 15 18 15.4477 18 16C18 16.5523 17.5535 17 17.0028 17H2.99719Z" fill="white" />
    </svg>
);

function Header() {
    return (
        <div className={styles.Header}>
            <div className={styles.left}>
                <NavDropdown title={menu__icon} className={styles.mini__menu}>
                    <NavDropdown.Item className={styles.text__menu} href="/movies">Фильмы</NavDropdown.Item>
                    <NavDropdown.Item className={styles.text__menu} href="/cartoons">Мультфильмы</NavDropdown.Item>
                    <NavDropdown.Item className={styles.text__menu} href="/series">Сериалы</NavDropdown.Item>
                    <NavDropdown.Item className={styles.text__menu} href="/collections">
                        Подборки
                    </NavDropdown.Item>
                    <NavDropdown.Item className={styles.text__menu} href="/new">
                        Новинки
                    </NavDropdown.Item>
                </NavDropdown>

                <div className={styles.logo}>
                    <a href='null'>
                        <svg className={styles.img__logo} width="120" height="64" viewBox="0 0 120 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M29.6773 44.9757C30.3708 45.9609 31.3316 46.5485 32.5596 46.7384C33.8331 46.9283 35.0497 46.6791 36.2094 45.9906C37.3692 45.3021 38.4778 44.2991 39.5352 42.9815C40.5926 41.6639 41.6159 40.097 42.6051 38.2809C43.5943 36.4647 44.5722 34.518 45.5386 32.4407C46.5051 30.3634 47.4659 28.2268 48.421 26.0308C49.3761 23.8348 50.3482 21.7041 51.3374 19.6386C52.3266 17.5732 53.3386 15.6265 54.3732 13.7985C55.4079 11.9705 56.4995 10.4036 57.6479 9.09788C58.7962 7.79215 59.9958 6.79506 61.2465 6.10658C62.4972 5.4181 63.8275 5.1807 65.2374 5.39436C65.9196 5.51307 66.3403 5.5012 66.4995 5.35875C66.6587 5.21631 66.7042 4.99078 66.636 4.68215C66.5905 4.51597 66.4654 4.14206 66.2607 3.56041C66.0561 2.97877 65.7093 2.3912 65.2204 1.79768C64.7315 1.20417 64.0891 0.717493 63.2931 0.337643C62.4972 -0.0422061 61.4967 -0.101557 60.2914 0.15959C58.5859 0.539439 57.0111 1.38815 55.5671 2.70576C54.1231 4.02336 52.7814 5.64363 51.5421 7.56662C50.3027 9.48961 49.16 11.6262 48.114 13.9765C47.0679 16.3269 46.0787 18.7068 45.1464 21.1165C44.214 23.5262 43.3328 25.8764 42.5028 28.1674C41.6728 30.4584 40.8598 32.5178 40.0639 34.3459C39.268 36.1739 38.4778 37.6755 37.6932 38.8506C36.9087 40.0258 36.0957 40.6965 35.2543 40.8626C34.8677 40.9339 34.6119 40.6608 34.4868 40.0436C34.3618 39.4263 34.3277 38.5895 34.3845 37.533C34.4414 36.4766 34.5778 35.254 34.7938 33.8651C35.0099 32.4763 35.2657 31.046 35.5613 29.574C35.8569 28.1021 36.1696 26.654 36.4994 25.2295C36.8291 23.8051 37.1361 22.5231 37.4203 21.3836C37.7046 20.244 37.9547 19.3063 38.1708 18.5703C38.3868 17.8344 38.5176 17.4308 38.563 17.3596C38.6767 17.1934 38.6654 16.9619 38.5289 16.6652C38.3925 16.3684 38.1651 16.042 37.8467 15.6859C37.5284 15.3298 37.1475 14.9736 36.704 14.6175C36.2606 14.2614 35.7944 13.9469 35.3055 13.6739C34.8166 13.4008 34.3333 13.1931 33.8558 13.0507C33.3782 12.9082 32.9462 12.8726 32.5596 12.9438C32.3094 12.9913 32.0138 13.5848 31.6727 14.7244C31.3316 15.8639 30.8313 17.68 30.1719 20.1728C29.4214 21.9771 28.6198 23.7635 27.7671 25.5322C26.9143 27.3009 26.0274 28.9805 25.1065 30.5711C24.1855 32.1618 23.2474 33.6337 22.2923 34.9869C21.3372 36.3401 20.3651 37.4915 19.3759 38.4411C18.3867 39.3907 17.4032 40.1089 16.4253 40.5956C15.4475 41.0822 14.4924 41.2662 13.5601 41.1475C13.2189 41.0526 13.0029 40.8152 12.912 40.4353C12.821 40.0555 12.8267 39.5985 12.929 39.0643C13.0313 38.5301 13.1962 37.9307 13.4236 37.266C13.651 36.6012 13.9125 35.9424 14.2082 35.2896C14.5038 34.6367 14.8108 34.0016 15.1291 33.3844C15.4475 32.7671 15.7318 32.233 15.9819 31.7819C16.6641 30.6186 17.4202 29.3841 18.2502 28.0784C19.0803 26.7727 19.916 25.4432 20.7574 24.09C21.5988 22.7368 22.4174 21.3836 23.2133 20.0304C24.0092 18.6772 24.7085 17.3596 25.3111 16.0776C25.9137 14.7956 26.4026 13.573 26.7779 12.4097C27.1531 11.2464 27.3407 10.1899 27.3407 9.24032C27.3407 8.93169 27.2725 8.52217 27.136 8.01175C26.9996 7.50133 26.7551 6.99685 26.4027 6.4983C26.0502 5.99974 25.5726 5.57242 24.97 5.21631C24.3674 4.8602 23.6113 4.68215 22.7017 4.68215C22.2469 4.68215 21.6499 5.04419 20.9109 5.76828C20.1718 6.49237 19.3077 7.41823 18.3185 8.54591C17.3293 9.67359 16.232 10.9259 15.0268 12.3028C13.8216 13.6798 12.5254 15.0211 11.1382 16.3269C9.75104 17.6326 8.28431 18.8255 6.73796 19.9057C5.19161 20.9859 3.5998 21.799 1.96249 22.3451C1.37124 22.535 0.939177 22.6774 0.666292 22.7724C0.393406 22.8674 0.211486 22.9386 0.120524 22.9861C0.0295622 23.0335 -0.00454798 23.081 0.0181925 23.1285C0.0409329 23.176 0.0409329 23.2472 0.0181925 23.3422C-0.0272884 23.6033 0.0125067 23.9297 0.137579 24.3215C0.262652 24.7132 0.478682 25.1049 0.785678 25.4966C1.09267 25.8883 1.48494 26.2207 1.96249 26.4937C2.44004 26.7667 2.9858 26.9032 3.59979 26.9032C4.62311 26.9032 5.62368 26.7074 6.60152 26.3157C7.57935 25.9239 8.56286 25.372 9.55207 24.6598C10.5413 23.9475 11.5589 23.0988 12.605 22.1136C13.651 21.1284 14.7425 20.0304 15.8796 18.8196C16.9711 17.6801 18.0342 16.4752 19.0689 15.2051C20.1036 13.935 21.053 12.6471 21.9171 11.3414C21.9171 11.5075 21.7977 11.8102 21.559 12.2494C21.3202 12.6886 21.0189 13.1872 20.655 13.7451C20.2912 14.303 19.8876 14.8846 19.4441 15.49C19.0007 16.0954 18.5743 16.6592 18.165 17.1815C17.7556 17.7038 17.3861 18.1489 17.0564 18.5169C16.7266 18.8849 16.4936 19.1045 16.3571 19.1757C15.1064 21.3598 13.8841 23.3422 12.6902 25.1227C11.4964 26.9032 10.4333 28.6007 9.50091 30.215C8.56855 31.8294 7.80676 33.4259 7.2155 35.0047C6.62425 36.5834 6.29452 38.2512 6.2263 40.008C6.20356 40.9576 6.34569 41.8419 6.65268 42.661C6.95968 43.48 7.38037 44.1863 7.91477 44.7798C8.44917 45.3733 9.06315 45.8481 9.75674 46.2042C10.4503 46.5604 11.1723 46.7503 11.9228 46.774C13.0143 46.8215 14.1229 46.5544 15.2485 45.9728C16.3742 45.3911 17.4771 44.6374 18.5572 43.7115C19.6374 42.7856 20.6721 41.747 21.6613 40.5956C22.6505 39.4441 23.5487 38.3165 24.356 37.2125C25.1633 36.1086 25.8626 35.0937 26.4538 34.1678C27.0451 33.2419 27.4885 32.5416 27.7841 32.0668C27.6704 33.5624 27.6249 35.1352 27.6477 36.7852C27.6704 38.4352 27.841 39.9664 28.1593 41.379C28.4777 42.7916 28.9837 43.9904 29.6773 44.9757ZM55.7815 21.8489C55.5802 21.7095 55.4124 21.6272 55.2782 21.6019C55.0769 21.5766 54.7189 21.8045 54.2044 22.2858C53.6899 22.7671 53.1139 23.4509 52.4764 24.3375C51.8388 25.224 51.1845 26.2688 50.5134 27.472C49.8423 28.6752 49.2439 29.9733 48.7182 31.3664C48.1925 32.7595 47.7955 34.216 47.527 35.7357C47.2586 37.2555 47.2027 38.7753 47.3593 40.295C47.4487 41.1562 47.6557 41.8528 47.98 42.3847C48.3044 42.9166 48.6623 43.3219 49.0538 43.6005C49.4453 43.8792 49.8199 44.0691 50.1779 44.1705C50.5358 44.2718 50.8042 44.3351 50.9832 44.3604C52.2359 44.4871 53.3544 44.3098 54.3387 43.8285C55.3229 43.3472 56.1953 42.6507 56.9559 41.7388C57.7165 40.827 58.3764 39.7631 58.9357 38.5473C59.4949 37.3315 59.9758 36.0524 60.3785 34.7099C60.3338 34.5073 60.1996 34.3553 59.9758 34.254C59.7522 34.1526 59.4949 34.0767 59.2041 34.026C58.9133 33.9753 58.6225 33.9373 58.3317 33.912C58.0409 33.8867 57.7948 33.8487 57.5935 33.798C57.8395 33.8234 58.0465 33.8297 58.2142 33.817C58.382 33.8044 58.5218 33.7854 58.6337 33.76C59.5732 33.7347 60.4848 33.6017 61.3684 33.3611C62.252 33.1205 63.0405 32.8482 63.734 32.5442C64.4275 32.2403 65.0035 31.9553 65.4621 31.6894C65.9206 31.4234 66.1947 31.2398 66.2841 31.1384C66.3512 31.0371 66.424 30.8598 66.5023 30.6065C66.5805 30.3532 66.6309 30.0999 66.6532 29.8466C66.6756 29.5933 66.67 29.3717 66.6365 29.1817C66.6029 28.9918 66.5078 28.8968 66.3513 28.8968C66.2841 28.8968 66.094 28.9538 65.7808 29.0678C65.4676 29.1817 65.0874 29.3147 64.64 29.4667C64.1926 29.6187 63.7004 29.7833 63.1636 29.9606C62.6267 30.1379 62.0786 30.3026 61.5194 30.4545C61.7878 29.1374 61.9556 27.9976 62.0227 27.0351C62.0898 26.5031 62.0618 26.0156 61.9388 25.5723C61.8158 25.129 61.6536 24.7428 61.4523 24.4135C61.2509 24.0842 61.016 23.8246 60.7476 23.6346C60.4792 23.4446 60.2219 23.337 59.9758 23.3116C59.5732 23.2863 59.1929 23.318 58.835 23.4066C58.4771 23.4953 58.1303 23.6156 57.7948 23.7676C57.5935 23.5143 57.3754 23.261 57.1405 23.0077C56.9056 22.7544 56.6707 22.5328 56.4358 22.3428C56.2009 22.1528 55.9828 21.9882 55.7815 21.8489ZM53.5152 28.4507C53.4273 27.8241 53.4163 27.1405 53.4822 26.4C53.3723 26.6848 53.2844 27.0195 53.2184 27.404C53.1525 27.7885 53.092 28.173 53.0371 28.5576C52.9821 28.9421 52.9271 29.291 52.8722 29.6043C52.8172 29.9176 52.7678 30.1455 52.7238 30.2879C52.2621 31.5696 51.8829 32.837 51.5861 34.0903C51.2893 35.3435 51.0915 36.4614 50.9926 37.4441C50.8936 38.4268 50.8826 39.2243 50.9596 39.8366C51.0365 40.449 51.2069 40.7694 51.4707 40.7979C51.6026 40.8264 51.8225 40.5629 52.1302 40.0075C52.438 39.4521 52.7952 38.7329 53.2019 37.85C53.6087 36.967 54.0373 35.9844 54.488 34.902C54.9387 33.8197 55.3619 32.7659 55.7576 31.7405C55.2739 31.5696 54.8178 31.242 54.3891 30.7578C53.9604 30.2736 53.6691 29.5046 53.5152 28.4507ZM58.81 32.2827C58.587 31.9755 58.4803 31.4187 58.49 30.6123C58.49 30.1515 58.5264 29.6619 58.5991 29.1435C58.6718 28.6251 58.747 28.2315 58.8245 27.9627C58.9021 27.6939 58.97 27.6459 59.0282 27.8187C59.0864 27.9915 59.1009 28.5387 59.0718 29.4603C59.0621 29.6907 59.0355 30.0555 58.9918 30.5547C58.9482 31.0539 58.8876 31.6299 58.81 32.2827ZM68.318 23.4617C68.318 23.1278 68.3949 22.9252 68.5487 22.8536C68.7025 22.7821 68.9113 22.7821 69.1749 22.8536C69.2848 22.9013 69.521 22.9907 69.8835 23.1219C70.246 23.253 70.6195 23.4497 71.004 23.712C71.3885 23.9743 71.7181 24.32 71.9928 24.7492C72.2674 25.1784 72.3718 25.703 72.3058 26.3229C72.2619 26.8475 72.1136 27.4972 71.8609 28.2721C71.6083 29.047 71.3061 29.8994 70.9546 30.8293C71.4599 30.0663 72.0037 29.2676 72.586 28.4331C73.1682 27.5985 73.734 26.8236 74.2833 26.1083C74.8326 25.393 75.3379 24.7909 75.7993 24.3021C76.2607 23.8134 76.6342 23.5332 76.9199 23.4617C77.3813 23.3424 77.8207 23.4021 78.2382 23.6405C78.6556 23.8789 79.0126 24.1889 79.3093 24.5704C79.6059 24.9519 79.8201 25.3513 79.9519 25.7685C80.0838 26.1858 80.0838 26.5017 79.9519 26.7163C79.5784 27.2647 79.128 28.0814 78.6007 29.1662C78.0734 30.2511 77.5351 31.4731 76.9858 32.8322C77.5351 31.9023 78.1612 30.883 78.8643 29.7743C79.5674 28.6655 80.254 27.6224 80.9242 26.6448C81.5943 25.6672 82.2205 24.8327 82.8027 24.1412C83.385 23.4497 83.8299 23.0563 84.1375 22.9609C84.5989 22.8179 85.0438 22.8715 85.4723 23.1219C85.9007 23.3722 86.2632 23.6882 86.5598 24.0697C86.8565 24.4512 87.0652 24.8446 87.186 25.2499C87.3069 25.6553 87.3014 25.9652 87.1696 26.1798C86.8839 26.609 86.5214 27.2468 86.082 28.0933C85.6425 28.9397 85.1811 29.9292 84.6978 31.0618C84.2144 32.1944 83.753 33.4283 83.3136 34.7635C82.8741 36.0988 82.5171 37.4698 82.2425 38.8766C81.9678 40.2833 81.8085 41.6841 81.7646 43.079C81.7206 44.4739 81.8634 45.7912 82.193 47.0311C82.2589 47.2218 82.2534 47.4364 82.1765 47.6749C82.0996 47.9133 81.7975 48.0206 81.2702 47.9967C81.0725 47.9729 80.7868 47.9073 80.4133 47.8C80.0398 47.6927 79.6608 47.4722 79.2763 47.1384C78.8918 46.8046 78.5348 46.3277 78.2052 45.7078C77.8756 45.0878 77.6559 44.2771 77.5461 43.2757C77.4801 42.775 77.4856 42.012 77.5625 40.9867C77.6394 39.9614 77.8042 38.8229 78.0569 37.5711C78.3096 36.3193 78.6556 35.0199 79.095 33.6727C79.5345 32.3255 80.0837 31.0797 80.7429 29.9352C80.8528 29.7683 80.9352 29.5716 80.9901 29.3451C81.045 29.1186 81.0505 29.0053 81.0066 29.0053C80.9187 28.9576 80.7319 29.1424 80.4463 29.5597C80.1607 29.9769 79.8146 30.5253 79.4081 31.2049C79.0017 31.8844 78.5622 32.6534 78.0898 33.5117C77.6175 34.3701 77.1506 35.2225 76.6892 36.069C76.2278 36.9154 75.7938 37.7142 75.3873 38.4653C74.9809 39.2163 74.6568 39.8303 74.4151 40.3072C74.2833 40.8556 74.1624 41.3742 74.0526 41.863C73.9427 42.3518 73.8438 42.8346 73.756 43.3115C73.734 43.4068 73.723 43.5141 73.723 43.6334C73.723 43.7526 73.701 43.8599 73.6571 43.9553C73.6132 44.0506 73.5308 44.1281 73.4099 44.1877C73.2891 44.2473 73.0968 44.2771 72.8332 44.2771C72.6354 44.2533 72.3443 44.1937 71.9598 44.0983C71.5753 44.0029 71.2018 43.8539 70.8392 43.6512C70.4767 43.4486 70.1801 43.1863 69.9494 42.8644C69.7187 42.5425 69.6473 42.167 69.7352 41.7378C69.7791 41.4755 69.911 40.8854 70.1307 39.9674C70.3504 39.0494 70.6525 37.9765 71.037 36.7485C71.4215 35.5206 71.8774 34.2211 72.4047 32.8501C72.932 31.4791 73.5253 30.2213 74.1844 29.0768C74.2943 28.9099 74.3767 28.7132 74.4316 28.4867C74.4865 28.2602 74.492 28.1469 74.4481 28.1469C74.3822 28.0992 74.2174 28.2363 73.9537 28.5582C73.69 28.8801 73.377 29.3153 73.0144 29.8637C72.6519 30.4121 72.2509 31.038 71.8115 31.7414C71.3721 32.4447 70.9271 33.166 70.4767 33.9052C70.0263 34.6443 69.5924 35.3656 69.1749 36.069C68.7575 36.7724 68.3949 37.3983 68.0873 37.9467C67.582 39.2342 67.181 40.4025 66.8844 41.4517C66.5878 42.5008 66.4944 43.2757 66.6042 43.7764C66.6482 43.991 66.6317 44.1341 66.5548 44.2056C66.4779 44.2771 66.3736 44.3129 66.2417 44.3129C66.1099 44.3129 65.9836 44.295 65.8627 44.2593C65.7419 44.2235 65.6485 44.1937 65.5826 44.1698C65.5167 44.146 65.3903 44.0864 65.2036 43.991C65.0168 43.8956 64.8136 43.7883 64.5939 43.6691C64.3741 43.5499 64.1544 43.4128 63.9347 43.2578C63.715 43.1028 63.5612 42.9419 63.4733 42.775C63.0998 42.1789 62.9625 41.4576 63.0613 40.6112C63.1602 39.7647 63.3854 38.8289 63.737 37.8036C64.0885 36.7783 64.5279 35.6756 65.0553 34.4953C65.5826 33.315 66.0879 32.1109 66.5713 30.883C67.0547 29.655 67.4666 28.4092 67.8072 27.1455C68.1477 25.8818 68.318 24.6538 68.318 23.4617ZM93.8825 13.2079C93.4138 13.1711 93.1672 13.2631 93.1425 13.4842C93.0192 14.3682 92.3224 16.2161 91.0522 19.028C89.7819 21.8398 88.0739 25.5786 85.928 30.2445C85.3114 31.6197 84.8243 33.0256 84.4666 34.4622C84.109 35.8988 83.8685 37.2433 83.7452 38.4957C83.6218 39.7482 83.6034 40.8287 83.6897 41.7373C83.776 42.6459 83.9672 43.2353 84.2631 43.5054C84.4851 43.7264 84.7688 43.9045 85.1141 44.0395C85.4594 44.1746 85.8047 44.2728 86.15 44.3342C86.4953 44.3956 86.8036 44.414 87.075 44.3895C87.3463 44.3649 87.5189 44.3035 87.5929 44.2053V43.4686C87.5929 43.002 87.6176 42.3635 87.6669 41.5531C87.7162 40.7427 87.8149 39.8096 87.9629 38.7536C88.1109 37.6976 88.3575 36.568 88.7028 35.3647C88.8755 35.1437 89.1961 34.763 89.6648 34.2228C90.1334 33.6825 90.6637 33.0931 91.2557 32.4546C91.8476 31.8162 92.4519 31.1838 93.0685 30.5576C93.6852 29.9314 94.2463 29.428 94.7519 29.0473C95.2576 28.6667 95.6522 28.458 95.9359 28.4211C96.2195 28.3843 96.3243 28.6237 96.2503 29.1394L96.1023 30.2077C95.1404 30.9198 94.197 31.6934 93.272 32.5283C92.3471 33.3633 91.5208 34.2473 90.7932 35.1805C90.0656 36.1137 89.4675 37.0837 88.9988 38.0905C88.5302 39.0974 88.2589 40.1288 88.1849 41.1848C88.1602 41.4303 88.1787 41.7311 88.2404 42.0872C88.302 42.4433 88.4315 42.7871 88.6288 43.1186C88.8262 43.4502 89.116 43.7264 89.4983 43.9474C89.8806 44.1685 90.3801 44.2544 90.9967 44.2053C92.3533 44.1316 93.568 43.6343 94.6409 42.7134C95.7139 41.7925 96.645 40.6752 97.4342 39.3614C98.2235 38.0476 98.8833 36.6417 99.4136 35.1437C99.9439 33.6457 100.357 32.2705 100.653 31.018L95.8804 33.8176C97.1876 32.737 98.723 31.6811 100.487 30.6497C100.806 30.4629 101.133 30.2813 101.468 30.105C101.282 30.5164 101.102 30.9369 100.93 31.3664C100.371 32.7595 99.9494 34.216 99.6641 35.7357C99.3789 37.2555 99.3195 38.7753 99.4859 40.295C99.581 41.1562 99.8008 41.8528 100.145 42.3847C100.49 42.9166 100.87 43.3219 101.286 43.6005C101.702 43.8792 102.1 44.0691 102.481 44.1705C102.861 44.2718 103.146 44.3351 103.336 44.3604C104.667 44.4871 105.856 44.3098 106.901 43.8285C107.947 43.3472 108.874 42.6507 109.682 41.7388C110.49 40.827 111.192 39.7631 111.786 38.5473C112.38 37.3315 112.891 36.0524 113.319 34.7099C113.271 34.5073 113.129 34.3553 112.891 34.254C112.653 34.1526 112.38 34.0767 112.071 34.026C111.762 33.9753 111.453 33.9373 111.144 33.912C110.835 33.8867 110.574 33.8487 110.36 33.798C110.621 33.8234 110.841 33.8297 111.019 33.817C111.198 33.8044 111.346 33.7854 111.465 33.76C112.463 33.7347 113.432 33.6017 114.371 33.3611C115.309 33.1205 116.147 32.8482 116.884 32.5442C117.621 32.2403 118.233 31.9553 118.72 31.6894C119.207 31.4234 119.498 31.2398 119.594 31.1384C119.665 31.0371 119.742 30.8598 119.825 30.6065C119.908 30.3532 119.962 30.0999 119.986 29.8466C120.01 29.5933 120.004 29.3717 119.968 29.1817C119.932 28.9918 119.831 28.8968 119.665 28.8968C119.594 28.8968 119.392 28.9538 119.059 29.0678C118.726 29.1817 118.322 29.3147 117.847 29.4667C117.371 29.6187 116.848 29.7833 116.278 29.9606C115.708 30.1379 115.125 30.3026 114.531 30.4545C114.816 29.1374 114.994 27.9976 115.066 27.0351C115.137 26.5031 115.107 26.0156 114.977 25.5723C114.846 25.129 114.674 24.7428 114.46 24.4135C114.246 24.0842 113.996 23.8246 113.711 23.6346C113.426 23.4446 113.152 23.337 112.891 23.3116C112.463 23.2863 112.059 23.318 111.679 23.4066C111.299 23.4953 110.93 23.6156 110.574 23.7676C110.36 23.5143 110.128 23.261 109.878 23.0077C109.629 22.7544 109.379 22.5328 109.13 22.3428C108.88 22.1528 108.648 21.9882 108.435 21.8489C108.221 21.7095 108.042 21.6272 107.9 21.6019C107.686 21.5766 107.306 21.8045 106.759 22.2858C106.212 22.7671 105.6 23.4509 104.923 24.3375C104.472 24.9281 104.012 25.5889 103.545 26.3201C103.433 26.3464 103.314 26.3775 103.187 26.4136C102.583 26.5855 101.886 26.8556 101.097 27.2239C101.097 27.1257 101.109 27.052 101.134 27.0029C101.208 26.0698 100.974 25.3146 100.431 24.7375C99.8884 24.1604 99.1855 23.8842 98.3222 23.9087C97.8289 23.9087 97.3109 24.0561 96.7683 24.3507C96.2257 24.6454 95.683 25.0138 95.1404 25.4558C94.5978 25.8979 94.0736 26.3951 93.568 26.9477C93.0624 27.5002 92.5999 28.0405 92.1806 28.5685C91.7613 29.0964 91.3913 29.5814 91.0707 30.0235C90.75 30.4655 90.5157 30.8093 90.3677 31.0549C91.0337 29.7042 91.6688 28.4764 92.2731 27.3713C92.8774 26.2662 93.4509 25.2103 93.9935 24.2034C94.5361 23.1966 95.0294 22.1959 95.4734 21.2013C95.9174 20.2067 96.2873 19.1201 96.5833 17.9413C96.8546 16.8853 96.8361 16.0136 96.5278 15.326C96.2195 14.6384 95.8187 14.1227 95.3254 13.7788C94.8321 13.435 94.3511 13.2447 93.8825 13.2079ZM106.559 27.3623C106.536 27.3229 106.51 27.283 106.48 27.2424C106.344 27.0582 106.122 26.874 105.814 26.6898C105.506 26.5056 105.068 26.3522 104.501 26.2294C104.286 26.1906 103.968 26.2208 103.545 26.3201C103.311 26.6864 103.075 27.0704 102.837 27.472C102.344 28.3042 101.888 29.1819 101.468 30.105C102.969 29.3154 104.629 28.6307 106.446 28.0511C106.42 28.2199 106.395 28.3887 106.37 28.5576C106.315 28.9421 106.26 29.291 106.206 29.6043C106.151 29.9176 106.101 30.1455 106.057 30.2879C105.595 31.5696 105.216 32.837 104.919 34.0903C104.623 35.3435 104.425 36.4614 104.326 37.4441C104.227 38.4268 104.216 39.2243 104.293 39.8366C104.37 40.449 104.54 40.7694 104.804 40.7979C104.936 40.8264 105.156 40.5629 105.464 40.0075C105.771 39.4521 106.129 38.7329 106.535 37.85C106.942 36.967 107.371 35.9844 107.821 34.902C108.272 33.8197 108.695 32.7659 109.091 31.7405C108.607 31.5696 108.151 31.242 107.722 30.7578C107.294 30.2736 107.002 29.5046 106.849 28.4507C106.761 27.8241 106.75 27.1405 106.816 26.4C106.71 26.6745 106.624 26.9953 106.559 27.3623ZM106.559 27.3623C106.639 27.5017 106.675 27.6336 106.665 27.7581C106.653 27.9177 106.597 28.0098 106.499 28.0343L106.446 28.0511C106.48 27.8354 106.515 27.6197 106.552 27.404L106.559 27.3623ZM91.1576 39.5973C91.634 39.5522 92.0955 39.3721 92.5421 39.0568C92.9887 38.7414 93.4129 38.3529 93.8149 37.8912C94.2168 37.4295 94.5815 36.9284 94.909 36.3878C95.2365 35.8473 95.5194 35.318 95.7576 34.8C94.8048 35.4532 93.9861 36.0725 93.3013 36.6581C92.6165 37.2437 92.0806 37.7561 91.6935 38.1953C91.3065 38.6345 91.0609 38.9836 90.9567 39.2426C90.8525 39.5016 90.9194 39.6198 91.1576 39.5973ZM110.931 32.2827C110.708 31.9755 110.602 31.4187 110.611 30.6123C110.611 30.1515 110.648 29.6619 110.72 29.1435C110.793 28.6251 110.868 28.2315 110.946 27.9627C111.023 27.6939 111.091 27.6459 111.149 27.8187C111.208 27.9915 111.222 28.5387 111.193 29.4603C111.183 29.6907 111.157 30.0555 111.113 30.5547C111.069 31.0539 111.009 31.6299 110.931 32.2827Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M93.2773 62.5577C94.8169 63.5192 96.7152 64 98.9723 64C100.773 64 102.228 63.6026 103.337 62.8077C104.446 62 105 60.9231 105 59.5769C105 58.5641 104.654 57.718 103.963 57.0385C103.271 56.359 102.208 55.8077 100.773 55.3846C99.442 54.9872 98.5874 54.7179 98.2091 54.5769C97.8307 54.3974 97.6415 54.2244 97.6415 54.0577C97.6415 53.7244 98.046 53.5577 98.8549 53.5577C99.6638 53.5577 100.577 53.6923 101.595 53.9615C102.599 54.2051 103.441 54.5256 104.119 54.9231V51.0769C102.554 50.359 100.903 50 99.168 50C97.3284 50 95.8867 50.359 94.8429 51.0769C93.7992 51.7949 93.2773 52.8269 93.2773 54.1731C93.2773 55.2628 93.6524 56.1442 94.4026 56.8173C95.1528 57.4904 96.2781 58.0449 97.7785 58.4808C98.9136 58.8141 99.6703 59.0641 100.049 59.2308C100.44 59.4103 100.636 59.5897 100.636 59.7692C100.636 60.1923 100.107 60.4038 99.0506 60.4038C98.1503 60.4038 97.1131 60.218 95.9389 59.8462C94.7908 59.4872 93.9036 59.0449 93.2773 58.5192V62.5577ZM18.9912 63.6216H15V50.3784H25.2101V53.8784H18.9912V55.1838H23.4651V58.4H18.9912V63.6216ZM39.958 63.6216H35.7983V50.3784H39.958V63.6216ZM49.7899 63.6216H60V60.1216H53.9084V50.3784H49.7899V63.6216ZM73.4295 63.6216H69.4538V50.3784H73.5251L76.4496 55.0892L79.3932 50.3784H83.4454V63.6216H79.5079V56.2054L77.6155 59.3649H75.3983L73.4295 56.2054V63.6216Z" fill="url(#paint0_linear_0_2640)" />
                            <defs>
                                <linearGradient id="paint0_linear_0_2640" x1="15" y1="50" x2="15" y2="64" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#DC773D" />
                                    <stop offset="1" stop-color="#F8544D" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </a>
                </div>
                <div className={styles.main__menu}>
                    <ul className={styles.menu}>
                        <a className={styles.text} href='/movies'><li>Фильмы</li></a>
                        <a className={styles.text} href='/cartoons'><li>Мультфильмы</li></a>
                        <a className={styles.text} href='/series'><li>Сериалы</li></a>
                        <a className={styles.text} href='/colections'><li>Подборки</li></a>
                        <a className={styles.text} href='/new'><li>Новинки</li></a>
                    </ul>
                </div>
            </div>
            <div className={styles.search}>
                <a className={styles.text} href='null'><div>Поиск</div></a>
                <svg className={styles.img__search} xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none">
                    <path fill="#DC773D" fill-rule="evenodd" d="m21 19.3 6.7 6.7c.4.5.4 1.2 0 1.7-.5.4-1.2.4-1.7 0l-6.7-6.8a11.8 11.8 0 1 1 1.7-1.7ZM2.2 11.8a9.5 9.5 0 1 0 19 0 9.5 9.5 0 0 0-19 0Z" clip-rule="evenodd" />
                </svg>
            </div>
        </div>
    )
}

export default Header
import { Swiper } from "swiper/react";
import { Navigation, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import uuid from "react-uuid";
import { ButtonDiv, ArrowBack, ArrowNext } from "../styles/swiperStyles";
import { useState } from "react";



const Swipe = (props) => {
    const nextId = `${"a" + uuid()}`;
    const prevId = `${"b" + uuid()}`;
    const [hidePrev, setHidePrev] = useState(true);

    return (
        <>
            {props.navigation && (
                <>
                    <ButtonDiv prev alignCenter justifyCenter hidePrev={hidePrev}>
                        <button className={`${prevId} prev`}>
                            <ArrowBack />
                        </button>
                    </ButtonDiv>

                    <ButtonDiv next alignCenter justifyCenter>
                        <button className={`${nextId} next`}>
                            <ArrowNext />
                        </button>
                    </ButtonDiv>
                </>
            )}

            <Swiper
            breakpoints={
                {
                        320: {
                            slidesPerView: 1,
                            // spaceBetween: 20,
                            slidesPerGroup:1
                        },
                        // when window width is >= 480px
                        480: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            // spaceBetween: 20
                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                            slidesPerGroup:3
                        }
                }
            }
            // spaceBetween={props.spaceBetween}
            // slidesPerView={props.slidesPerView}
            // slidesPerGroup={props.slidesPerGroup}
            navigation={{ nextEl: `.${nextId}`, prevEl: `.${prevId}` }}
            onNavigationNext={() => {
                setHidePrev(false);
            }}
            loopFillGroupWithBlank={props.loopFillGroupWithBlank}
            modules={[Navigation, Scrollbar]}
            speed={800}
            loop={props.loop}
            allowTouchMove={false}
            >
            {props.children}
        </Swiper>
        </>
    );
};

export default Swipe;
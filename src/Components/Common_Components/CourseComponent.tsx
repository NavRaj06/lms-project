import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  IconButton,
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
import { FC, MouseEvent, useState } from "react";
import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";

interface CourseComponentProps {
  img: string;
  title: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  description: string;
}
const features = [
  "Comprehensive Content Protection.",
  "Unrestricted Access.",
  "Enhanced Performance",
];
const CourseComponent: FC<CourseComponentProps> = ({
  img,
  onClick,
  title,
  description,
}) => {
  const [openPopover, setOpenPopover] = useState(false);
  const [liked, setLiked] = useState(false);

  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };
  return (
    <Popover open={openPopover} handler={setOpenPopover} placement="top">
      <PopoverHandler {...triggers}>
        <Card
          className="w-full max-w-[24rem] shadow-lg hover:scale-105 duration-500 cursor-pointer"
          onClick={() => {
            console.log("card clicked");
            onClick;
          }}
          placeholder={undefined}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <CardHeader
            className="h-48 relative"
            floated={false}
            color="blue-gray"
            placeholder={undefined}
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            <img
              className="w-full h-full object-cover"
              src={img ? img : `https://via.placeholder.com/300?text=${title}`}
              alt={title}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-black/60" />
            <IconButton
              size="sm"
              color="red"
              variant="text"
              className="absolute top-4 right-4 rounded-full"
              placeholder={undefined}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </IconButton>
          </CardHeader>

          <CardBody
            placeholder={undefined}
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            <div className="mb-3 flex items-center justify-between">
              <Typography
                variant="h5"
                color="blue-gray"
                className="font-medium"
                placeholder={undefined}
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                {title}
              </Typography>
              <Typography
                color="blue-gray"
                className="flex items-center gap-1.5 font-normal"
                placeholder={undefined}
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="-mt-0.5 h-5 w-5 text-yellow-700"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                5.0
              </Typography>
            </div>
            <Typography
              color="gray"
              placeholder={undefined}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              className="line-clamp-3"
            >
              {description}
            </Typography>
          </CardBody>
        </Card>
      </PopoverHandler>

      <PopoverContent
        placeholder={undefined}
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        {...triggers}
        className="z-[999] grid w-[22rem] grid-cols-1 overflow-hidden p-0"
      >
        <div className="p-5">
          <h1 className="text-xl font-bold text-black pb-2">
            What you'll learn
          </h1>
          <ul className="text-black self-start list-inside text-start">
            {features.map((feature, index) => (
              <div className="relative circle-check custom-list" key={index}>
                <span className="text-primary">&#10004;</span> {feature}
              </div>
            ))}
          </ul>
          <div className="flex justify-between">
            <a href="#" className="-ml-1 inline-block pt-3">
              <Button
                size="sm"
                variant="text"
                className="flex items-center gap-x-2 capitalize "
                placeholder={undefined}
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Learn
                <svg
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.25 1.91669L5.33333 6.00002L1.25 10.0834"
                    stroke="#212121"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </a>
            <button
              className="p-2 rounded-full border-2 border-primary bg-white text-black hover:bg-primary transition"
              onClick={() => setLiked(!liked)}
            >
              {liked ? (
                <HeartIcon className="h-8 w-8" />
              ) : (
                <HeartOutline className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CourseComponent;

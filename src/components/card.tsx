import React from "react";
import Image from "next/image";
import Link from "next/link";

type CardType = {
  title: string;
  image: string;
  link: string;
};

const Card = ({ title, image, link }: CardType) => {
  return (
    <Link href={link}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={260} height={160} />
    </Link>
  );
};

export default Card;

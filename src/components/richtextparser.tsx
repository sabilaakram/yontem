"use client";

import { cn } from "@/lib/utils";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import Image from "next/image";
import Link from "next/link";

const ParseRichText = ({
  content,
  linkProps,
  headingProps,
  imageProps,
  paragraphProps,
}: {
  readonly content: BlocksContent;
  linkProps?: string;
  headingProps?: {
    h1?: string;
    h2?: string;
    h3?: string;
    h4?: string;
    h5?: string;
    h6?: string;
  };
  imageProps?: string;
  paragraphProps?: string;
}) => {
  if (!content) return null;
  return (
    <BlocksRenderer
      content={content}
      blocks={{
      //   image: ({ image }) => (
      //     <Image
      //       src={image.url}
      //       width={image.width}
      //       height={image.height}
      //       alt={image.alternativeText || ""}
      //       className={cn("rounded", imageProps)}
      //     />
      //   ),
      //   link: ({ children, url }) => (
      //     <Link href={url} className={linkProps}>
      //       {children}
      //     </Link>
      //   ),
        list: (props) => {
          if (props.format === "ordered") {
            return (
              <ol className="list-decimal pl-8 space-y-3 marker:text-[#161C2D] text-[#000000] font-gilroy font-normal text-[24px] leading-[29px]">{props.children}</ol>
            );
          }
          return (
            <ul className="list-disc pl-8  marker:text-[#161C2D] text-[#161C2D] font-gilroy font-semibold text-[24px] leading-[29px]">
              {props.children}
            </ul>
          );
        },

      //   heading: ({ children, level }) => {
      //     switch (level) {
      //       case 1:
      //         return (
      //           <h1 className={cn("font-sans font-bold", headingProps?.h1)}>
      //             {children}
      //           </h1>
      //         );
      //       case 2:
      //         return (
      //           <h2
      //             className={cn(
      //               "font-sans font-bold text-3xl",
      //               headingProps?.h2
      //             )}
      //           >
      //             {children}
      //           </h2>
      //         );
      //       case 3:
      //         return (
      //           <h3
      //             className={cn(
      //               "font-sans font-bold text-2xl",
      //               headingProps?.h3
      //             )}
      //           >
      //             {children}
      //           </h3>
      //         );
      //       case 4:
      //         return (
      //           <h4
      //             className={cn(
      //               "font-sans font-bold text-xl",
      //               headingProps?.h4
      //             )}
      //           >
      //             {children}
      //           </h4>
      //         );
      //       case 5:
      //         return (
      //           <h5
      //             className={cn(
      //               "font-sans font-bold text-lg",
      //               headingProps?.h5
      //             )}
      //           >
      //             {children}
      //           </h5>
      //         );
      //       case 6:
      //         return (
      //           <h6
      //             className={cn(
      //               "font-sans font-bold text-base",
      //               headingProps?.h6
      //             )}
      //           >
      //             {children}
      //           </h6>
      //         );
      //       default:
      //         return (
      //           <h1 className={cn("font-sans font-bold", headingProps?.h1)}>
      //             {children}
      //           </h1>
      //         );
      //     }
      //   },

        paragraph: ({ children }) => (
          <p className={paragraphProps}>{children}</p>
        ),
      }}
    />
  );
};

export default ParseRichText;

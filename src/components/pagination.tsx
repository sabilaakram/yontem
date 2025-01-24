import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination";
  
  export function PaginationDots() {
    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
  
          {/* Dots for pages */}
          <PaginationItem>
            <span className="w-2 h-2 bg-gray-500 rounded-full mx-1"></span>
          </PaginationItem>
          <PaginationItem>
            <span className="w-2 h-2 bg-gray-500 rounded-full mx-1"></span>
          </PaginationItem>
          <PaginationItem>
            <span className="w-2 h-2 bg-gray-500 rounded-full mx-1"></span>
          </PaginationItem>
  
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
  
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  }
  
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination";
  
  interface Props {
    page: number;
    totalPages: number;
    onPageChange: (value: number) => void;
  }
  
  export const EventsPagination = ({ page, totalPages, onPageChange }: Props) => {
    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (page > 0) onPageChange(page - 1);
              }}
              className={page === 0 ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
  
          {Array.from({ length: totalPages })
            .slice(Math.max(0, page - 1), Math.min(totalPages, page + 2))
            .map((_, idx) => {
              const pageNum = Math.max(0, page - 1) + idx;
              return (
                <PaginationItem key={pageNum}>
                  <PaginationLink
                    href="#"
                    isActive={pageNum === page}
                    onClick={(e) => {
                      e.preventDefault();
                      onPageChange(pageNum);
                    }}
                  >
                    {pageNum + 1}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
  
          {totalPages > 3 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}
  
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (page < totalPages - 1) onPageChange(page + 1);
              }}
              className={page >= totalPages - 1 ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  };
  
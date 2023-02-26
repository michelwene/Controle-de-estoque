import * as S from "./styles";
import { PaginationProps } from "./types";

export function Pagination({
	currentPage,
	totalPages,
	nextPage,
	prevPage,
}: PaginationProps) {
	return (
		<S.Container>
			<S.Content>
				<S.Button onClick={prevPage} disabled={currentPage === 1}>
					<S.LeftIcon />
				</S.Button>
				<S.Button
					onClick={nextPage}
					disabled={currentPage === totalPages || totalPages === 0}
				>
					<S.RightIcon />
				</S.Button>
			</S.Content>
		</S.Container>
	);
}

import EmptyMessage from "components/EmptyMessage";
import ReportItem from "components/ReportItem";
import { useProductsContext } from "context/ProductsProvider";
import { useSelector } from "react-redux";
import { selectReports } from "redux/reportsSlice";
import { maskMoney } from "utils/maskOutputs";
import * as S from "./styles";

export default function Dashboard() {
	const reports = useSelector(selectReports);
	const { products } = useProductsContext();

	const totalPrice = products.reduce((acc, product) => {
		return acc + product.price! * product.stock!;
	}, 0);

	return (
		<>
			<S.Container>
				<S.WrapperTotalPrice>
					<S.TitleWrapperTotalPrice>
						Preço total dos produtos cadastrados:
					</S.TitleWrapperTotalPrice>
					<S.TotalPrice>{maskMoney(totalPrice)}</S.TotalPrice>
				</S.WrapperTotalPrice>
				<S.Card>
					<S.CardHeader>
						<S.CardTitle>Lista de atividades</S.CardTitle>
					</S.CardHeader>
					<S.CardBody>
						{reports.length === 0 ? (
							<EmptyMessage text="Não há nenhum registro de atividade." />
						) : (
							<>
								{reports.map((report, index) => (
									<ReportItem key={report + index} report={report} />
								))}
							</>
						)}
					</S.CardBody>
				</S.Card>
			</S.Container>
		</>
	);
}

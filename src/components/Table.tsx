import React, {useState} from 'react'
import {Button, Loader} from "components"

interface Props {
    header: any;
    data: any;
}

export const Table = ({header, data}: Props) => {
    const [loading, setloading] = useState(true)

    return (
        <div className="table-cont">
            <div className="table-scroll">
				<table className="table">
					<thead className="t-head">
						<tr className="">
							{header?.map((item: any, i: any) =>
								item?.titleComponent ? (
									<th key={i}>
										{item?.titleComponent({
											item: item?.title,
											data: data?.[0],
										})}
									</th>
								) : (
									<th key={i}>{item?.title}</th>
								)
							)}
						</tr>
					</thead>

					{Boolean(data.length) && (
						<tbody className="t-body">
							{data?.map((data: any, i: any) => (
								<tr key={i} className="">
									{header?.map((item: any, i: any) =>
										item?.component ? (
											<td key={i}>
												{item.component({ item: data[item?.key], data })}
											</td>
										) : (
											<td key={i}>{data[item?.key]}</td>
										)
									)}
								</tr>
							))}
						</tbody>
					)}
				</table>

				{!Boolean(data.length) && (
					<div className="empty-cont">
						{/* <img src="icons/paper.svg" alt="" id="paper"/> */}
						{loading ? (
							<div className="text-center mt-3 bolder">
								Loading Transactions . . .
							</div>
						) : (
							<div className="empty-text">
								No Transactions Yet!
							</div>
						)}
					</div>
				)}
			</div>
        </div>
    )
}

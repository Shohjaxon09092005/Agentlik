import React from 'react'
import '../style/statistic.css'
function StaticCard() {
  return (
    <div className="table-container_static">
    <h2>2024-yil davomida kelib tushgan murojaatlar statistikasi</h2>
    <table className="statistics-table">
        <thead>
            <tr>
                <th>Kelib tushgan murojaatlar</th>
                <th>Jarayonda</th>
                <th colSpan="5">Ijro holati</th>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th>Ijobiy hal qilingan</th>
                <th>Huquqiy ma'lumot berilgan</th>
                <th>Tushuntirish berilgan</th>
                <th>Rad etilgan</th>
                <th>Boshqa holatlar bo'yicha</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>19 657</td>
                <td>987</td>
                <td>6 985</td>
                <td>5 905</td>
                <td>2 503</td>
                <td>1 310</td>
                <td>1 967</td>
            </tr>
        </tbody>
    </table>
</div>
  )
}

export default StaticCard

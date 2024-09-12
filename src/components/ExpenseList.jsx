import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button, IconButton, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  addExpense,
  updateExpense,
  deleteExpense,
} from "../store/expenseSlice";

const columns = [
  { id: "category", label: "Category", minWidth: 170 },
  { id: "name", label: "Name", minWidth: 170 },
  { id: "price", label: "Price", minWidth: 170 },
  { id: "date", label: "Date", minWidth: 170 },
  { id: "action", label: "Action", minWidth: 170 },
];

export default function ExpenseList() {
  const expenses = useSelector((state) => state.expense);
  const dispatch = useDispatch();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleAdd = () => {
    function getCurrentDate() {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const year = now.getFullYear();
      return `${day}-${month}-${year}`;
    }
    const input = prompt(
      "Enter new expense category, name, price, and date separated by commas",
      `Category , Name , Amount ,${getCurrentDate()}`
    );
    if (input !== null) {
      const [category, name, price, date] = input
        .split(",")
        .map((item) => item.trim());

      if (category && name && price && date) {
        const newExpense = {
          category,
          name,
          price: "₹" + price,
          date,
        };

        dispatch(addExpense(newExpense));
      } else {
        alert("All fields are required!");
      }
    }
  };

  const handleEdit = (index) => {
    const expenseItem = expenses[index];
    if (!expenseItem) {
      alert("The selected expense item could not be found.");
      return;
    }

    const input = prompt(
      "Enter category, name, price, and date separated by commas",
      `${expenseItem.category}, ${expenseItem.name}, ${expenseItem.price.slice(
        1
      )}, ${expenseItem.date}`
    );

    if (input !== null) {
      const [updatedCategory, updatedName, updatedPrice, updatedDate] = input
        .split(",")
        .map((item) => item.trim());

      const updatedExpense = {
        category: updatedCategory,
        name: updatedName,
        price: "₹" + updatedPrice,
        date: updatedDate,
      };

      dispatch(updateExpense({ index, updatedExpense }));
    }
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      dispatch(deleteExpense(index));
    }
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Typography variant="h4" sx={{ my: 5, pl: 2 }}>
        Expense List
      </Typography>
      <Typography variant="h6" sx={{ pl: 2, my: 5 }}>
        Add expense
        <Button>
          <AddCircleIcon onClick={handleAdd} />
        </Button>
      </Typography>
      <TableContainer sx={{ maxHeight: 750 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {expenses
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index} hover role="checkbox" tabIndex={-1}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.id === "action" ? (
                          <div>
                            <IconButton
                              color="primary"
                              onClick={() =>
                                handleEdit(page * rowsPerPage + index)
                              }
                            >
                              <EditIcon />
                            </IconButton>
                            <IconButton
                              color="secondary"
                              onClick={() =>
                                handleDelete(page * rowsPerPage + index)
                              }
                            >
                              <DeleteIcon />
                            </IconButton>
                          </div>
                        ) : (
                          value
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={expenses.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

"use client";

import { FC } from "react";
import Typography from "@mui/material/Typography";
import {
  CircularProgress,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useOperations } from "@/data/operationsContext";
import { SnippetRow } from "@/app/snippets/snippetRow";
import axios from "axios";

export const SnippetTable: FC = () => {
  const { snippetOperations } = useOperations();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const TOKEN = process.env.NEXT_PUBLIC_TOKEN;

  // const { data: snippets, isFetching } = useQuery(
  //   ["snippets", "descriptors"],
  //   snippetOperations.listSnippetDescriptors
  // );

  const { data: snippets, isFetching } = useQuery(["snippets"], () =>
    axios
      .get(`${apiUrl}/snippets`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((res) => res.data)
  );

  console.log(snippets);

  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Snippets
      </Typography>
      {isFetching ? (
        <Grid container justifyContent="center">
          <Grid item xs={1}>
            <CircularProgress />
          </Grid>
        </Grid>
      ) : (
        <Table size="medium">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Content</TableCell>
              <TableCell>Conformance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ cursor: "pointer" }}>
            {snippets &&
              snippets.map((snippet: any) => (
                <SnippetRow key={snippet.id} snippet={snippet} />
              ))}
          </TableBody>
        </Table>
      )}
    </>
  );
};

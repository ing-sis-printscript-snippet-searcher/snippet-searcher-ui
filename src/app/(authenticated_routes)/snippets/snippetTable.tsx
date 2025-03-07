'use client'

import {FC} from 'react'
import Typography from '@mui/material/Typography'
import {CircularProgress, Grid, Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material'
import {useQuery} from '@tanstack/react-query'
import {useOperations} from '@/data/operationsContext'
import {SnippetRow} from '@/app/(authenticated_routes)/snippets/snippetRow'

export const SnippetTable: FC = () => {

  const {snippetOperations} = useOperations()
  const {data, isFetching} = useQuery(['snippets', 'descriptors'], snippetOperations.listSnippetDescriptors)
  const snippets = data?.data

  return (
      <>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Snippets
        </Typography>
        {isFetching ? (
            <Grid container justifyContent="center">
              <Grid item xs={1}>
                <CircularProgress/>
              </Grid>
            </Grid>
        ) : (
            <Table size="medium">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Compliance</TableCell>
                  <TableCell>Content</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {snippets && Array.isArray(snippets) && snippets?.map((snippet) => (
                    <SnippetRow key={snippet.id} snippet={snippet}/>
                ))}
              </TableBody>
            </Table>
        )}
      </>
  )
}

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido : 102112</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>
      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                  <span className="font-medium text-muted-foreground">
                    Pendente
                  </span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                  <span className="font-medium text-muted-foreground">
                    Lucas Prado
                  </span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                  <span className="font-medium text-muted-foreground">
                    11 93123125
                  </span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                  <span className="font-medium text-muted-foreground">
                    lucas.prado@teste.com.br
                  </span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Realizado há
              </TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                  <span className="font-medium text-muted-foreground">
                    há 3 minutos atrás
                  </span>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead className="text-right">Quantidade</TableHead>
              <TableHead className="text-right">Preço</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Pizza Pepperoni Família</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">R$69,90</TableCell>
              <TableCell className="text-right">R$139,80</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pizza Frango </TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">R$49,90</TableCell>
              <TableCell className="text-right">R$99,80</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pizza Queijo</TableCell>
              <TableCell className="text-right">1</TableCell>
              <TableCell className="text-right">R$69,90</TableCell>
              <TableCell className="text-right">R$69,90</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
                <TableCell colSpan={3}>
                    Total do Pedido
                </TableCell>
                <TableCell className="text-right font-medium">R$ 249,60</TableCell>
            </TableRow>

          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  );
}

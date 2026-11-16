# Lista de presentes de casamento

Página de lista de presentes onde os itens são **simbólicos**: o convidado
escolhe um presente, paga pelo Pix (ou cartão, nos itens caros) e o dinheiro
cai direto na conta do casal. Ninguém entrega mercadoria.

Site estático. Sem backend, sem banco, sem dependência paga.

## Trocar de casamento

Mexe só no `dados.js`. O `index.html` não muda de cliente para cliente.

| O que | Onde |
|---|---|
| Nomes, data e local | `noivos`, `data`, `local` |
| Foto do topo | `hero.largo` e `hero.alto` |
| Mensagem de abertura | `tituloCarta`, `recado`, `assinatura` |
| Chave Pix de quem recebe | `pix.chave`, `pix.nome`, `pix.cidade` |
| Lista de presentes | `presentes` |
| Recados iniciais | `recados` |

Ao entregar para o cliente, coloque `demonstracao: false` e troque a chave Pix
de exemplo pela chave real do casal.

## Foto do topo

Dois recortes da mesma foto: `hero-largo.jpg` (1600×1000, computador) e
`hero-alto.jpg` (900×1126, celular). Uma foto de retrato esmagada numa faixa
larga fica ruim, por isso são dois arquivos.

Para trocar, com o ffmpeg:

```bash
ffmpeg -i foto.jpg -vf "crop=LARGURA:ALTURA:X:Y,scale=1600:-2" -q:v 4 hero-largo.jpg
```

A foto atual é da Unsplash (licença livre, uso comercial permitido). Foi
escolhida sem rosto visível de propósito: a licença da Unsplash não cobre
pessoas reconhecíveis.

## Pix

O código copia e cola é gerado no próprio navegador: BR Code no padrão EMV do
Banco Central, com CRC16-CCITT. Não depende de API nem de internet além da
página. O valor de cada presente já vai embutido no código.

Não há taxa e o dinheiro cai na hora, direto na chave do casal.

## Cartão de crédito

Cada presente caro tem o **seu próprio** link de pagamento, com o valor exato.
O casal gera esses links uma vez, no banco dele — Nubank, PagBank, Mercado
Pago, Asaas, InfinitePay, qualquer um serve, já que o valor é fixo — e cola no
campo `link` do presente, em `dados.js`.

A aba Cartão só aparece em presentes a partir de `cartao.valorMinimo`
(R$ 500 hoje). Ninguém parcela um livro de R$ 90, e isso derruba o número de
links que o casal precisa criar: são 11 em vez de 27.

Presente sem `link` preenchido mostra a simulação de parcelas e avisa que o
cartão ainda não foi ligado. Cotas e valor livre ficam só no Pix, porque o link
de pagamento tem valor fechado.

## Enquanto for demonstração

`demonstracao: true` mostra a faixa de aviso no topo, e o `<meta name="robots"
content="noindex, nofollow">` no `index.html` mantém a página fora do Google.
Tirar os dois só ao fechar com o cliente.

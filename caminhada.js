/* ===========================================================
   Card de Caminhada — geometria e desenho
   Medidas do Figma: "DA Mídia — MR 2026", CARD-CAMINHADA (2260:528).
   Mesma geometria do card de adesivaço, conferida nó a nó: só a palavra muda.

   O BLOCO INFORMAÇÃO cresce PARA CIMA: o rodapé é fixo em y=1876 e o
   conteúdo empurra o topo. É o mesmo comportamento do auto-layout de lá —
   por isso a altura é calculada antes de qualquer coisa ser desenhada.

   As listras da marca NÃO entram na paleta: são fixas.
   =========================================================== */

/* Mesma paleta do Estúdio de Cards — é a identidade, não uma escolha
   por projeto. Sempre do mais escuro ao mais claro dentro da família. */
export const PALETA = [
  ['#004F9F', '#0069B3', '#009FE3'],   // azul  escuro · médio · claro
  ['#008D3F', '#52AE32'],              // verde escuro · claro
  ['#FAB434', '#FFDD00', '#FFEE34'],   // alaranjado · vibrante · claro
  ['#0F1A2E', '#FAFAFA']               // quase-preto · branco
];

export const CARD = { w: 1080, h: 1920 };

/* a foto mora aqui; o resto do card é desenhado por cima */
export const FOTO = { x: 0, y: 8, w: 1080, h: 1868, r: 50 };

/* ---------- listras da marca ----------
   Proporções medidas no Figma, na ordem em que aparecem da esquerda para a
   direita. As mesmas quatro cores servem às três listras — muda só a largura
   total. Elas ficam ATRÁS da foto: só aparecem na faixa que sobra em cima
   (8px), embaixo (44px) e nos cantos arredondados. */
const LISTRAS = [
  { p: 353.36 / 1080, c: '#009640' },
  { p: 275.44 / 1080, c: '#FFDD00' },
  { p: 125.93 / 1080, c: '#FFFFFF' },
  { p: 325.27 / 1080, c: '#004899' }
];
const L_SUP = { y: 0,    h: 68  };
const L_INF = { y: 1800, h: 120 };

/* ---------- bloco de informação ---------- */
export const INFO = { x: 0, w: 1080, baixo: 1876, r: 50 };
const I_PADT = 39, I_PADB = 222, I_MARGEM = 68, I_GAP = 26, I_LOCAL_PADT = 7;

/* O card é 1080×1920, mas o feed do Instagram mostra 3:4 — 1080×1440 recortado
   ao centro. Só guia de tela: nunca entra no PNG nem no SVG. */
export const CORTE_FEED = { w: 1080, h: 1440, y: (1920 - 1440) / 2 };

/* ---------- bloco do título (preso ao topo do bloco de informação) ----------
   Os deslocamentos são relativos ao TOPO do bloco: quando ele sobe, o título
   sobe junto. Negativo porque o título transborda para cima. */
const T_BLOCO   = { x: 139, dy: -130, w: 802, h: 152,
                    raio: { tl: 50, tr: 50, br: 0, bl: 0 } };
const T_LISTRAS = { x: 139, dy: 15, w: 802, h: 7 };
const T_TITULO  = { x: 139, dy: -94, w: 802 };
const T_22      = { x: 732.24, dy: -160.268, w: 284.232, h: 160.268 };

/* ---------- logotipo: fixo, medido a partir do rodapé do bloco ---------- */
export const LOGO = { x: 321, w: 428, h: 114.276, doFundo: 38 };
export const LOGOS = ['azul-claro', 'azul', 'verde', 'branco', 'amarelo'];

/* ---------- linhas de data / horário / local ---------- */
const IC = 67;                 // os ícones são quadrados de 67
const D_GAP_ICONE = 15, D_GAP_ITEM = 12;
const H_GAP_ICONE = 13, LINHA_GAP = 54;
const P_GAP_ICONE = 23;
const LINHA_H = 67;            // altura da faixa data+horário

/* O "22" é vetor: a fonte Gunterz é local e não existe fora da máquina do
   designer. Como ele só muda de cor, virar desenho não custa nada. */
const VINTE2 = '<svg width="285" height="161" viewBox="0 0 285 161" fill="none" xmlns="http://www.w3.org/2000/svg">'
+ '<path d="M138.02 119.068V160.268H0.206L0.412 131.222C0.412 123.531 2.472 116.733 6.592 110.828C10.712 104.785 15.862 99.4293 22.042 94.76C28.3593 90.0907 35.0887 85.9707 42.23 82.4C49.5087 78.692 56.238 75.19 62.418 71.894C68.7353 68.598 73.954 65.4393 78.074 62.418C82.194 59.2593 84.254 55.9633 84.254 52.53C84.254 49.7833 82.9493 47.6547 80.34 46.144C77.7307 44.6333 74.7093 43.878 71.276 43.878C67.2933 43.878 63.448 44.9767 59.74 47.174C56.032 49.234 53.8347 52.5987 53.148 57.268L0 52.942C0.961333 45.3887 2.95267 38.3847 5.974 31.93C8.99533 25.4753 13.39 19.9133 19.158 15.244C25.0633 10.4373 32.548 6.72934 41.612 4.12001C50.8133 1.37334 62.006 0 75.19 0C87.138 0 97.232 1.37334 105.472 4.12001C113.849 6.72934 120.579 10.3 125.66 14.832C130.741 19.364 134.381 24.6513 136.578 30.694C138.913 36.7367 140.08 43.1913 140.08 50.058C140.08 58.5727 138.363 65.9887 134.93 72.306C131.497 78.6233 127.171 84.1167 121.952 88.786C116.871 93.4553 111.24 97.438 105.06 100.734C99.0173 103.893 93.2493 106.639 87.756 108.974C82.4 111.171 77.7993 113.094 73.954 114.742C70.1087 116.253 67.9113 117.695 67.362 119.068H138.02Z" fill="__COR__"/>'
+ '<path d="M282.172 119.068V160.268H144.358L144.564 131.222C144.564 123.531 146.624 116.733 150.744 110.828C154.864 104.785 160.014 99.4293 166.194 94.76C172.511 90.0907 179.24 85.9707 186.382 82.4C193.66 78.692 200.39 75.19 206.57 71.894C212.887 68.598 218.106 65.4393 222.226 62.418C226.346 59.2593 228.406 55.9633 228.406 52.53C228.406 49.7833 227.101 47.6547 224.492 46.144C221.882 44.6333 218.861 43.878 215.428 43.878C211.445 43.878 207.6 44.9767 203.892 47.174C200.184 49.234 197.986 52.5987 197.3 57.268L144.152 52.942C145.113 45.3887 147.104 38.3847 150.126 31.93C153.147 25.4753 157.542 19.9133 163.31 15.244C169.215 10.4373 176.7 6.72934 185.764 4.12001C194.965 1.37334 206.158 0 219.342 0C231.29 0 241.384 1.37334 249.624 4.12001C258.001 6.72934 264.73 10.3 269.812 14.832C274.893 19.364 278.532 24.6513 280.73 30.694C283.064 36.7367 284.232 43.1913 284.232 50.058C284.232 58.5727 282.515 65.9887 279.082 72.306C275.648 78.6233 271.322 84.1167 266.104 88.786C261.022 93.4553 255.392 97.438 249.212 100.734C243.169 103.893 237.401 106.639 231.908 108.974C226.552 111.171 221.951 113.094 218.106 114.742C214.26 116.253 212.063 117.695 211.514 119.068H282.172Z" fill="__COR__"/>'
+ '</svg>';

/* ícones da marca: 1º path é o quadro de fundo, o resto é o glifo.
   São os mesmos do Estúdio de Cards — mesma arte, só desenhada maior aqui. */
const ICONES = {
  pin: '<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">'
+ '<path d="M29.2164 0H8.78356C3.93253 0 0 3.93253 0 8.78356V29.2164C0 34.0675 3.93253 38 8.78356 38H29.2164C34.0675 38 38 34.0675 38 29.2164V8.78356C38 3.93253 34.0675 0 29.2164 0Z" fill="__FUNDO__"/>'
+ '<path d="M19.3269 32.6295C11.657 33.3365 5.03984 25.8718 5.30209 18.3767C5.54154 11.4707 11.7102 5.11203 18.696 5.37048C19.0646 5.32107 19.4219 5.31347 19.7944 5.32867C27.1451 5.62893 33.0286 12.3107 32.6904 19.6043C32.3711 26.4913 26.4039 32.9754 19.3269 32.6257V32.6295ZM18.0955 8.08042C8.03104 9.21305 4.42032 21.4325 12.3563 27.6125C14.728 29.4597 16.9742 29.9348 19.9084 29.9158C26.077 29.0112 30.8318 24.131 29.874 17.6241C29.0378 11.9268 23.8802 7.61293 18.0955 8.08042Z" fill="__GLIFO__"/>'
+ '<path d="M19.1254 27.5327L18.7492 27.2438C17.7268 26.4419 16.883 25.4385 16.0848 24.4199C13.7816 21.4819 10.6536 16.8108 13.5079 13.257C14.7736 11.6835 16.3395 10.7257 18.3539 10.5053C21.8468 10.0796 25.9212 13.2114 25.6171 16.9172C25.3625 20.011 21.6606 25.2941 19.3231 27.2743L19.1254 27.5327ZM18.6922 13.3939C13.7132 14.0362 14.8534 20.5849 19.3193 20.3683C24.1995 19.4827 23.0364 13.0784 18.6922 13.3939Z" fill="__GLIFO__"/>'
+ '</svg>',
  calendario: '<svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">'
+ '<path d="M29.9699 0H9.01008C4.03395 0 0 4.03395 0 9.01008V29.9699C0 34.9461 4.03395 38.98 9.01008 38.98H29.9699C34.9461 38.98 38.98 34.9461 38.98 29.9699V9.01008C38.98 4.03395 34.9461 0 29.9699 0Z" fill="__FUNDO__"/>'
+ '<path d="M19.4236 31.9271C16.1526 31.9271 12.8815 31.9271 9.6104 31.9271C8.0119 31.9271 7.11908 31.081 7.11518 29.4864C7.09959 23.6071 7.09569 17.7316 7.10739 11.8523C7.10739 10.1797 8.06649 9.25177 9.71957 9.22058C10.0159 9.21668 10.3122 9.23228 10.6046 9.22058C10.9438 9.20499 11.0958 9.32975 11.0841 9.68844C11.0646 10.2031 11.0802 10.7216 11.0841 11.2363C11.1036 12.6593 12.2304 13.7783 13.6768 13.8133C15.0921 13.8484 16.1876 12.7958 16.25 11.3415C16.2539 11.2441 16.2578 11.1466 16.2578 11.0452C16.2682 9.84439 16.8868 9.24398 18.1136 9.24398C19.4899 9.24398 20.8701 9.26347 22.2464 9.23618C22.7337 9.22838 22.9052 9.38043 22.8624 9.86778C22.8234 10.3551 22.839 10.8503 22.8546 11.3415C22.8935 12.7139 23.993 13.7783 25.3849 13.8017C26.7494 13.8211 27.9113 12.7568 27.9854 11.4039C28.0009 11.0842 27.9932 10.7645 27.9854 10.4448C27.9724 9.61826 28.3882 9.21019 29.233 9.22058C30.9289 9.24398 31.8724 10.1797 31.8724 11.8835C31.8724 17.7121 31.8724 23.5408 31.8607 29.3695C31.8607 31.0265 30.9796 31.9154 29.3031 31.9232C26.0087 31.9388 22.7142 31.9271 19.4158 31.9271H19.4236ZM22.1528 26.7417C22.1528 26.7417 22.145 26.7417 22.1411 26.7417C22.1411 26.153 22.1372 25.5643 22.1411 24.9756C22.1489 24.3089 21.8136 23.9619 21.1625 23.9502C20.0318 23.9307 18.9051 23.9268 17.7744 23.9424C17.1 23.9502 16.7374 24.2972 16.7452 25.0067C16.7608 26.1374 16.7686 27.2641 16.7686 28.3948C16.7686 29.0654 17.1078 29.4046 17.755 29.4163C18.909 29.4358 20.063 29.4436 21.2171 29.428C21.8409 29.4202 22.1528 29.0693 22.1489 28.4416C22.1489 27.8762 22.1489 27.3109 22.1489 26.7456L22.1528 26.7417ZM24.0008 26.6481C24.0008 26.6481 24.0125 26.6481 24.0203 26.6481C24.0203 27.2875 24.0125 27.9269 24.0203 28.5663C24.0281 29.0537 24.2737 29.3851 24.7728 29.3929C26.0516 29.4163 27.3304 29.4241 28.6092 29.3968C29.0809 29.3851 29.3889 29.0927 29.3928 28.5897C29.4006 27.3343 29.4084 26.0789 29.3928 24.8274C29.385 24.3517 29.1238 24.0126 28.6326 24.0009C27.381 23.9697 26.1256 23.958 24.8702 23.9853C24.2893 23.997 23.9891 24.3517 24.0008 24.9522C24.0125 25.5175 24.0008 26.0828 24.0008 26.6481ZM9.52073 26.6403C9.52073 26.6403 9.53243 26.6403 9.53633 26.6403C9.53633 27.2797 9.52853 27.9191 9.53633 28.5585C9.54412 29.0888 9.84043 29.4046 10.3551 29.4124C11.5832 29.4319 12.8152 29.4358 14.0433 29.3968C14.5813 29.3812 14.8816 29.0381 14.8816 28.4689C14.8816 27.2875 14.8816 26.1062 14.8816 24.9249C14.8816 24.3323 14.5813 23.9814 13.9926 23.9697C12.7879 23.9463 11.5832 23.9541 10.3785 23.9697C9.82094 23.9775 9.52463 24.2972 9.52463 24.8625C9.52463 25.4512 9.52463 26.0438 9.52463 26.6325L9.52073 26.6403ZM29.3928 19.2872C29.3928 18.6751 29.3928 18.0591 29.3928 17.447C29.3928 16.9441 29.1394 16.64 28.6442 16.6283C27.3927 16.5971 26.1412 16.5776 24.8936 16.5932C24.3634 16.601 24.0125 16.8856 24.0125 17.4665C24.0125 18.6673 24.0125 19.8682 24.0164 21.0729C24.0164 21.6343 24.3127 21.9618 24.8663 21.9735C26.0672 21.9969 27.268 22.0008 28.4727 21.9774C29.0887 21.9657 29.4006 21.5992 29.3967 20.9793C29.3967 20.414 29.3967 19.8526 29.3967 19.2872H29.3928ZM9.53243 19.295H9.52853C9.52853 19.8837 9.52853 20.4764 9.52853 21.0651C9.52853 21.6694 9.84433 21.9813 10.4369 21.9852C11.591 21.9969 12.7489 22.0086 13.9069 21.9852C14.5034 21.9735 14.8816 21.6499 14.8855 21.0183C14.8933 19.837 14.8855 18.6556 14.8777 17.4782C14.8777 16.948 14.593 16.6439 14.0628 16.6322C12.8581 16.6088 11.6534 16.5932 10.4486 16.601C9.86772 16.6049 9.53633 16.9168 9.53633 17.525C9.53633 18.1137 9.53633 18.7063 9.53633 19.295H9.53243ZM22.1294 19.3106C22.1294 18.7687 22.1294 18.2307 22.1294 17.6887C22.1294 16.8973 21.8604 16.601 21.0884 16.5932C19.9812 16.5815 18.8778 16.601 17.7706 16.5932C17.0883 16.5893 16.7842 16.9246 16.7842 17.5874C16.7842 18.7414 16.7842 19.8993 16.7725 21.0534C16.7686 21.6655 17.0922 21.9696 17.6731 21.9774C18.8544 21.9969 20.0318 21.9969 21.2132 21.993C21.8058 21.993 22.1216 21.6772 22.1255 21.0807C22.1333 20.492 22.1255 19.8993 22.1255 19.3106H22.1294Z" fill="__GLIFO__"/>'
+ '<path d="M14.5891 9.57928C14.5891 10.1446 14.6047 10.7099 14.5852 11.2752C14.5657 11.8211 14.2616 12.1759 13.7197 12.1798C13.1817 12.1837 12.8386 11.8406 12.8269 11.2986C12.7996 10.168 12.7996 9.03735 12.8269 7.9067C12.8425 7.35697 13.1934 7.04117 13.7392 7.05677C14.285 7.07236 14.593 7.39596 14.6008 7.95738C14.6086 8.49931 14.6008 9.03735 14.6008 9.57928H14.5891Z" fill="__GLIFO__"/>'
+ '<path d="M26.2621 9.60262C26.2621 10.164 26.2699 10.7294 26.2621 11.2908C26.2543 11.8093 25.9619 12.1446 25.4629 12.1719C24.9248 12.1992 24.57 11.8678 24.5505 11.3259C24.5116 10.1757 24.496 9.0256 24.5233 7.87546C24.535 7.33353 24.9014 7.02553 25.4512 7.05282C25.9697 7.07621 26.2465 7.40761 26.266 7.91835C26.2855 8.47977 26.2699 9.0451 26.2699 9.60652C26.2699 9.60652 26.266 9.60652 26.2621 9.60652V9.60262Z" fill="__GLIFO__"/>'
+ '</svg>',
  relogio: '<svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">'
+ '<path d="M29.9853 0H9.0147C4.03602 0 0 4.03602 0 9.0147V29.9853C0 34.964 4.03602 39 9.0147 39H29.9853C34.964 39 39 34.964 39 29.9853V9.0147C39 4.03602 34.964 0 29.9853 0Z" fill="__FUNDO__"/>'
+ '<path d="M33.5623 19.3713C33.5506 27.1885 27.1728 33.6677 19.5273 33.6287C11.6516 33.5858 5.42209 27.2782 5.43379 19.3635C5.4455 11.6361 11.8194 5.34021 19.6053 5.36752C27.3094 5.39483 33.5779 11.679 33.5662 19.3713H33.5623ZM19.4766 31.4208C25.9636 31.4715 31.3974 26.1314 31.4442 19.66C31.491 12.9038 26.2367 7.55586 19.5039 7.51295C12.9194 7.46614 7.60653 12.7868 7.55582 19.4688C7.50511 26.0729 12.7868 31.3701 19.4805 31.4208H19.4766Z" fill="__GLIFO__"/>'
+ '<path d="M29.4236 19.4103C29.5562 24.7075 25.1171 29.2948 19.7224 29.4431C14.1403 29.5952 9.64665 25.2341 9.54523 19.5702C9.45161 14.1598 13.8556 9.631 19.3167 9.52177C24.8051 9.41255 29.2832 13.7931 29.4236 19.4142V19.4103ZM20.6 17.417C20.366 17.0191 20.4323 16.6914 20.4284 16.3793C20.4206 15.1467 20.4167 13.918 20.4284 12.6853C20.4323 11.991 20.1514 11.5268 19.4181 11.5307C18.6848 11.5307 18.4078 12.0027 18.4078 12.6931C18.4117 13.8672 18.3922 15.0375 18.4156 16.2116C18.4312 16.9255 18.3727 17.5457 17.8305 18.1347C17.222 18.7978 17.2493 19.6521 17.7135 20.4284C18.1816 21.2124 18.9266 21.5089 19.8121 21.4153C20.639 21.3294 21.4036 20.8847 21.5011 20.1046C21.6142 19.2152 22.1682 18.7978 22.6909 18.2751C23.6036 17.3662 24.5203 16.4574 25.437 15.5485C25.8271 15.1623 25.9207 14.7371 25.5384 14.308C25.1718 13.9024 24.7037 13.7307 24.2005 14.0389C23.9313 14.2027 23.7129 14.4563 23.4788 14.6786C22.5309 15.5797 21.5869 16.4808 20.6 17.4209V17.417Z" fill="__GLIFO__"/>'
+ '</svg>'
};

/* cache de desenhos recoloridos — a chave inclui as cores */
const cacheSvg = new Map();
function comoImagem(chave, svg, aoCarregar) {
  if (cacheSvg.has(chave)) return cacheSvg.get(chave);
  const im = new Image();
  im.onload = aoCarregar;
  im.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  cacheSvg.set(chave, im);
  return im;
}
export function icone(nome, fundo, glifo, aoCarregar) {
  return comoImagem('i' + nome + fundo + glifo,
    ICONES[nome].replace(/__FUNDO__/g, fundo).replace(/__GLIFO__/g, glifo), aoCarregar);
}
export function vinte2(cor, aoCarregar) {
  return comoImagem('v' + cor, VINTE2.replace(/__COR__/g, cor), aoCarregar);
}
export function svgIcone(nome, fundo, glifo) {
  return ICONES[nome].replace(/__FUNDO__/g, fundo).replace(/__GLIFO__/g, glifo);
}
export function svg22(cor) { return VINTE2.replace(/__COR__/g, cor); }

/* ---------- tipografia ----------
   ls é a porcentagem do Figma; em px vira ls * tamanho.
   Os pesos 600/700 condensados e o 800 semi-condensado foram baixados de
   verdade: sintetizar mudaria a largura do texto e o layout deixaria de
   bater com o Figma. */
const FONTES = {
  titulo: { familia: 'Encode Sans Expanded',       peso: 900, sz: 112, lh: 56,  ls: -0.07 },
  cidade: { familia: 'Encode Sans Semi Condensed', peso: 800, sz: 120, lh: 120, ls: -0.04 },
  dia:    { familia: 'Encode Sans Condensed',      peso: 600, sz: 48,  lh: 50,  ls: 0 },
  barra:  { familia: 'Encode Sans Condensed',      peso: 700, sz: 48,  lh: 50,  ls: 0 },
  local:  { familia: 'Encode Sans Condensed',      peso: 600, sz: 48,  lh: 50,  ls: -0.04 }
};
const espacamento = f => f.ls * f.sz;

/* Só o título da cidade troca de largura; o resto do card é fixo.
   Ordenadas da mais estreita para a mais larga — é como o olho compara. */
export const LARGURAS_CIDADE = [
  'Encode Sans Condensed',
  'Encode Sans Semi Condensed',
  'Encode Sans',
  'Encode Sans Semi Expanded',
  'Encode Sans Expanded'
];

/* `familia` sobrepõe a da tabela: é por onde a cidade muda de largura sem
   que nenhum outro texto do card se mexa. */
function aplicarFonte(g, k, familia) {
  const f = FONTES[k];
  g.font = f.peso + ' ' + f.sz + 'px "' + (familia || f.familia) + '"';
  g.letterSpacing = espacamento(f).toFixed(2) + 'px';
  return f;
}
function medir(g, txt, k, familia) { aplicarFonte(g, k, familia); return g.measureText(txt).width; }

/* Distância do topo da caixa de linha até a linha de base. Calculada aqui e
   guardada no plano para que canvas e SVG posicionem o texto no MESMO lugar. */
function baseDaLinha(g, k, familia) {
  const f = aplicarFonte(g, k, familia);
  const m = g.measureText('H');
  const asc  = m.fontBoundingBoxAscent  || f.sz * 0.75;
  const desc = m.fontBoundingBoxDescent || f.sz * 0.25;
  return f.lh / 2 + (asc - desc) / 2;
}

/* O Enter digitado pelo designer é quebra obrigatória; cada trecho ainda é
   ajustado à largura, então a quebra manual soma-se à automática. */
function quebrarTrecho(g, txt, largura) {
  const palavras = txt.split(/[ \t]+/).filter(Boolean);
  if (!palavras.length) return [''];
  const linhas = [];
  let atual = palavras[0];
  for (let i = 1; i < palavras.length; i++) {
    const teste = atual + ' ' + palavras[i];
    if (g.measureText(teste).width <= largura) atual = teste;
    else { linhas.push(atual); atual = palavras[i]; }
  }
  linhas.push(atual);
  return linhas;
}
function quebrar(g, txt, largura) {
  const saida = [];
  for (const trecho of String(txt).split('\n')) {
    if (!trecho.trim()) { saida.push(''); continue; }
    for (const l of quebrarTrecho(g, trecho, largura)) saida.push(l);
  }
  return saida.length ? saida : [''];
}

const MAI = s => String(s).toUpperCase();

/* ===========================================================
   PLANO: onde cada coisa fica. Fonte única de verdade —
   o canvas e o SVG apenas obedecem.
   =========================================================== */
export function plano(g, c) {
  const itens = [], zonas = [];

  /* ---- 1. medir o conteúdo antes de saber onde ele começa ----
     O bloco cresce para cima, então a altura vem primeiro. */

  // cidade: centralizada, quebra na margem; a largura da fonte é escolhida
  const fonteCidade = c.cidade.fonte || FONTES.cidade.familia;
  const largCidade = CARD.w - I_MARGEM * 2;
  aplicarFonte(g, 'cidade', fonteCidade);
  const linhasCidade = quebrar(g, MAI(c.cidade.txt), largCidade);
  const altCidade = linhasCidade.length * FONTES.cidade.lh;

  /* local: quebra na margem, mas o grupo continua centralizado pela linha mais
     longa. No Figma a caixa de texto trava na largura máxima e sobra vão à
     direita; aqui a medição é nossa, então dá pra ter as duas coisas. */
  const largLocal = CARD.w - I_MARGEM * 2 - IC - P_GAP_ICONE;
  aplicarFonte(g, 'local');
  const linhasLocal = quebrar(g, MAI(c.local.txt), largLocal);
  const larguraLocal = Math.max.apply(null, linhasLocal.map(l => g.measureText(l).width));
  const altTextoLocal = linhasLocal.length * FONTES.local.lh;
  const altLocal = Math.max(IC, altTextoLocal);

  const altBloco = I_PADT + altCidade + I_GAP + LINHA_H + I_GAP
                 + I_LOCAL_PADT + altLocal + I_PADB;
  const topo = INFO.baixo - altBloco;

  /* ---- 2. listras da marca, atrás de tudo ---- */
  const fundo = [];
  for (const faixa of [L_SUP, L_INF]) {
    let bx = 0;
    for (const s of LISTRAS) {
      const sw = s.p * CARD.w;
      fundo.push({ t: 'listra', x: bx, y: faixa.y, w: sw + 1, h: faixa.h, cor: s.c });
      bx += sw;
    }
  }

  /* ---- 3. o bloco branco ---- */
  itens.push({ t: 'forma', id: 'bloco', x: INFO.x, y: topo, w: INFO.w, h: altBloco,
               raio: { tl: INFO.r, tr: INFO.r, br: INFO.r, bl: INFO.r }, cor: c.bloco.cor });

  /* ---- 4. conteúdo em fluxo ---- */
  let cy = topo + I_PADT;

  itens.push({ t: 'texto', id: 'cidade', linhas: linhasCidade, k: 'cidade', cor: c.cidade.cor,
               x: CARD.w / 2, y: cy, lh: FONTES.cidade.lh, familia: fonteCidade,
               base: baseDaLinha(g, 'cidade', fonteCidade),
               alinha: 'center', zx: I_MARGEM, zw: largCidade, alt: altCidade });
  cy += altCidade + I_GAP;

  /* faixa data + horário: folga fixa entre os dois grupos, conjunto centralizado */
  const dia = MAI(c.dia.txt), data = MAI(c.data.txt), hora = MAI(c.hora.txt);
  const wDia = medir(g, dia, 'dia'), wData = medir(g, data, 'dia');
  const wBarra = medir(g, '|', 'barra'), wHora = medir(g, hora, 'dia');
  const larguraData = IC + D_GAP_ICONE + wDia + D_GAP_ITEM + wBarra + D_GAP_ITEM + wData;
  const larguraHora = IC + H_GAP_ICONE + wHora;
  const faixaW = larguraData + LINHA_GAP + larguraHora;
  let fx = (CARD.w - faixaW) / 2;
  const meio = cy + LINHA_H / 2;                 // ícone e texto centrados entre si
  const yTexto = meio - FONTES.dia.lh / 2;
  const baseDia = baseDaLinha(g, 'dia');

  const linhaTexto = (id, txt, k, x, cor, largura) => {
    itens.push({ t: 'texto', id: id, linhas: [txt], k: k, cor: cor, x: x, y: yTexto,
                 lh: FONTES[k].lh, base: baseDia, alinha: 'left',
                 zx: x, zw: largura, alt: FONTES[k].lh });
  };

  itens.push({ t: 'icone', id: 'iconeCal', nome: 'calendario', x: fx, y: meio - IC / 2,
               w: IC, h: IC, fundo: c.iconeCal.fundo, glifo: c.iconeCal.glifo });
  let tx = fx + IC + D_GAP_ICONE;
  linhaTexto('dia', dia, 'dia', tx, c.corInfo, wDia);
  tx += wDia + D_GAP_ITEM;
  linhaTexto('barra', '|', 'barra', tx, c.barra.cor, wBarra);
  tx += wBarra + D_GAP_ITEM;
  linhaTexto('data', data, 'dia', tx, c.corInfo, wData);

  fx += larguraData + LINHA_GAP;
  itens.push({ t: 'icone', id: 'iconeRel', nome: 'relogio', x: fx, y: meio - IC / 2,
               w: IC, h: IC, fundo: c.iconeRel.fundo, glifo: c.iconeRel.glifo });
  linhaTexto('hora', hora, 'dia', fx + IC + H_GAP_ICONE, c.corInfo, wHora);

  cy += LINHA_H + I_GAP + I_LOCAL_PADT;

  /* local: ícone + texto, conjunto centralizado, texto alinhado à esquerda */
  const larguraGrupo = IC + P_GAP_ICONE + larguraLocal;
  const lx = (CARD.w - larguraGrupo) / 2;
  const meioLocal = cy + altLocal / 2;
  itens.push({ t: 'icone', id: 'iconePin', nome: 'pin', x: lx, y: meioLocal - IC / 2,
               w: IC, h: IC, fundo: c.iconePin.fundo, glifo: c.iconePin.glifo });
  itens.push({ t: 'texto', id: 'local', linhas: linhasLocal, k: 'local', cor: c.local.cor,
               x: lx + IC + P_GAP_ICONE, y: meioLocal - altTextoLocal / 2,
               lh: FONTES.local.lh, base: baseDaLinha(g, 'local'), alinha: 'left',
               zx: lx + IC + P_GAP_ICONE, zw: larguraLocal, alt: altTextoLocal });

  /* ---- 5. bloco do título, preso ao topo ---- */
  itens.push({ t: 'forma', id: 'blocoTitulo', x: T_BLOCO.x, y: topo + T_BLOCO.dy,
               w: T_BLOCO.w, h: T_BLOCO.h, raio: T_BLOCO.raio, cor: c.blocoTitulo.cor });

  let bx = T_LISTRAS.x;
  for (const s of LISTRAS) {
    const sw = s.p * T_LISTRAS.w;
    itens.push({ t: 'listra', x: bx, y: topo + T_LISTRAS.dy, w: sw + 1,
                 h: T_LISTRAS.h, cor: s.c });
    bx += sw;
  }

  /* o 22 vem ANTES do título: no Figma ele fica atrás, a palavra passa por cima */
  itens.push({ t: 'vinte2', id: 'vinte2', x: T_22.x, y: topo + T_22.dy,
               w: T_22.w, h: T_22.h, cor: c.vinte2.cor });

  itens.push({ t: 'texto', id: 'titulo', linhas: ['CAMINHADA'], k: 'titulo', cor: c.titulo.cor,
               x: T_TITULO.x + T_TITULO.w / 2, y: topo + T_TITULO.dy,
               lh: FONTES.titulo.lh, base: baseDaLinha(g, 'titulo'), alinha: 'center',
               zx: T_TITULO.x, zw: T_TITULO.w, alt: FONTES.titulo.lh });

  /* ---- 6. logotipo: fixo, medido do rodapé ---- */
  itens.push({ t: 'logo', id: 'logo', nome: c.logo, x: LOGO.x,
               y: INFO.baixo - LOGO.doFundo - LOGO.h, w: LOGO.w, h: LOGO.h });

  /* ---- zonas de clique, tiradas do próprio plano ---- */
  for (const i of itens) {
    if (!i.id) continue;
    if (i.t === 'texto')
      zonas.push({ id: i.id, tipo: 'texto', x: i.zx, y: i.y, w: i.zw, h: i.alt });
    else
      zonas.push({ id: i.id, tipo: i.t === 'icone' ? 'icone' : 'cor',
                   x: i.x, y: i.y, w: i.w, h: i.h });
  }

  return { topo: topo, altura: altBloco, fundo: fundo, itens: itens, zonas: zonas };
}

/* ---------- caminho arredondado ---------- */
function caminho(g, x, y, w, h, r) {
  g.beginPath();
  g.moveTo(x + r.tl, y);
  g.lineTo(x + w - r.tr, y); g.quadraticCurveTo(x + w, y, x + w, y + r.tr);
  g.lineTo(x + w, y + h - r.br); g.quadraticCurveTo(x + w, y + h, x + w - r.br, y + h);
  g.lineTo(x + r.bl, y + h); g.quadraticCurveTo(x, y + h, x, y + h - r.bl);
  g.lineTo(x, y + r.tl); g.quadraticCurveTo(x, y, x + r.tl, y);
  g.closePath();
}
export const caminhoFoto = g =>
  caminho(g, FOTO.x, FOTO.y, FOTO.w, FOTO.h, { tl: FOTO.r, tr: FOTO.r, br: FOTO.r, bl: FOTO.r });

/* ---------- pintor 1: canvas ---------- */
/* as listras ficam ATRÁS da foto — por isso são um passo separado */
export function pintarFundo(g, p) {
  for (const l of p.fundo) { g.fillStyle = l.cor; g.fillRect(l.x, l.y, l.w, l.h); }
}

export function pintar(g, p, redesenhar, logos) {
  for (const i of p.itens) {
    if (i.t === 'forma') {
      caminho(g, i.x, i.y, i.w, i.h, i.raio); g.fillStyle = i.cor; g.fill();
    }
    else if (i.t === 'listra') { g.fillStyle = i.cor; g.fillRect(i.x, i.y, i.w, i.h); }
    else if (i.t === 'icone') {
      const im = icone(i.nome, i.fundo, i.glifo, redesenhar);
      if (im.complete && im.naturalWidth) g.drawImage(im, i.x, i.y, i.w, i.h);
    }
    else if (i.t === 'vinte2') {
      const im = vinte2(i.cor, redesenhar);
      if (im.complete && im.naturalWidth) g.drawImage(im, i.x, i.y, i.w, i.h);
    }
    else if (i.t === 'logo') {
      const im = logos && logos[i.nome];
      if (im && im.complete && im.naturalWidth) g.drawImage(im, i.x, i.y, i.w, i.h);
    }
    else if (i.t === 'texto') {
      aplicarFonte(g, i.k, i.familia);
      g.fillStyle = i.cor; g.textBaseline = 'alphabetic';
      g.textAlign = i.alinha === 'center' ? 'center' : 'left';
      i.linhas.forEach((ln, n) => g.fillText(ln, i.x, i.y + n * i.lh + i.base));
      g.textAlign = 'left';
    }
  }
}

/* ---------- pintor 2: SVG ---------- */
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const n2 = v => Math.round(v * 100) / 100;

export function caminhoSvg(x, y, w, h, r) {
  return 'M' + n2(x + r.tl) + ',' + n2(y) +
    ' H' + n2(x + w - r.tr) + ' Q' + n2(x + w) + ',' + n2(y) + ' ' + n2(x + w) + ',' + n2(y + r.tr) +
    ' V' + n2(y + h - r.br) + ' Q' + n2(x + w) + ',' + n2(y + h) + ' ' + n2(x + w - r.br) + ',' + n2(y + h) +
    ' H' + n2(x + r.bl) + ' Q' + n2(x) + ',' + n2(y + h) + ' ' + n2(x) + ',' + n2(y + h - r.bl) +
    ' V' + n2(y + r.tl) + ' Q' + n2(x) + ',' + n2(y) + ' ' + n2(x + r.tl) + ',' + n2(y) + ' Z';
}

/* embute um SVG externo como grupo posicionado, sem <svg> aninhado */
function embutir(bruto, x, y, w, h, prefixo) {
  const vb = /viewBox="([\d.\-]+) ([\d.\-]+) ([\d.]+) ([\d.]+)"/.exec(bruto);
  const vw = vb ? +vb[3] : w, vh = vb ? +vb[4] : h;
  let dentro = bruto.slice(bruto.indexOf('>') + 1, bruto.lastIndexOf('</svg>'));
  /* os ids do Figma se repetem entre os cinco logotipos; sem prefixo, dois
     clipPath com o mesmo nome no mesmo arquivo brigam */
  if (prefixo) dentro = dentro.replace(/id="([^"]+)"/g, 'id="' + prefixo + '$1"')
                              .replace(/url\(#([^)]+)\)/g, 'url(#' + prefixo + '$1)');
  return '<g transform="translate(' + n2(x) + ',' + n2(y) + ') scale(' +
         n2(w / vw) + ',' + n2(h / vh) + ')">' + dentro + '</g>';
}

export function svgDosElementos(p, logoBruto) {
  const listras = p.fundo.map(l =>
    '<rect x="' + n2(l.x) + '" y="' + n2(l.y) + '" width="' + n2(l.w) +
    '" height="' + n2(l.h) + '" fill="' + l.cor + '"/>');

  const corpo = [];
  for (const i of p.itens) {
    if (i.t === 'forma')
      corpo.push('<path d="' + caminhoSvg(i.x, i.y, i.w, i.h, i.raio) + '" fill="' + i.cor + '"/>');
    else if (i.t === 'listra')
      corpo.push('<rect x="' + n2(i.x) + '" y="' + n2(i.y) + '" width="' + n2(i.w) +
                 '" height="' + n2(i.h) + '" fill="' + i.cor + '"/>');
    else if (i.t === 'icone')
      corpo.push(embutir(svgIcone(i.nome, i.fundo, i.glifo), i.x, i.y, i.w, i.h, ''));
    else if (i.t === 'vinte2')
      corpo.push(embutir(svg22(i.cor), i.x, i.y, i.w, i.h, ''));
    else if (i.t === 'logo' && logoBruto)
      corpo.push(embutir(logoBruto, i.x, i.y, i.w, i.h, 'lg_'));
    else if (i.t === 'texto') {
      const f = FONTES[i.k];
      const linhas = i.linhas.map((ln, n) =>
        '<tspan x="' + n2(i.x) + '" y="' + n2(i.y + n * i.lh + i.base) + '">' +
        esc(ln) + '</tspan>').join('');
      corpo.push('<text font-family="' + (i.familia || f.familia) + '" font-size="' + f.sz +
        '" font-weight="' + f.peso + '" letter-spacing="' + n2(espacamento(f)) +
        '" fill="' + i.cor + '" text-anchor="' + (i.alinha === 'center' ? 'middle' : 'start') +
        '" xml:space="preserve">' + linhas + '</text>');
    }
  }
  /* devolvido separado porque as listras entram ANTES da foto no arquivo e os
     elementos depois — juntar aqui obrigaria quem exporta a fatiar a string */
  return {
    listras: '<g id="Listras">' + listras.join('\n') + '</g>',
    elementos: '<g id="Elementos">' + corpo.join('\n') + '</g>'
  };
}

/* ---------- estado inicial, igual ao Figma ---------- */
export const inicial = () => ({
  blocoTitulo: { cor: '#204AA2' },
  titulo:      { cor: '#FFFFFF' },
  vinte2:      { cor: '#00B0FF' },
  bloco:       { cor: '#FAFAFA' },
  cidade:      { txt: 'BARRO PRETO', cor: '#1547A9', fonte: 'Encode Sans Semi Condensed' },
  /* dia, data e horário andam juntos: uma cor só para os três */
  corInfo:     '#1547A9',
  dia:         { txt: 'DOMINGO' },
  data:        { txt: '30.02' },
  hora:        { txt: '00:00' },
  /* a barrinha segue a cor dos três até alguém escolher uma pra ela */
  barra:       { cor: '#1547A9', propria: false },
  local:       { txt: 'TRAVESSA PORTUGAL COM A RUA URACH', cor: '#1547A9' },
  iconeCal:    { fundo: '#009FE3', glifo: '#FFFFFF' },
  iconeRel:    { fundo: '#52AE32', glifo: '#FFFFFF' },
  iconePin:    { fundo: '#0069B3', glifo: '#FFFFFF' },
  logo:        'azul-claro'
});

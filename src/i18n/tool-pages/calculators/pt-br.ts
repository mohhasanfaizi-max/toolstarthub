import type { ToolPageTranslations } from "../types";

const data: ToolPageTranslations = {
  "percentage-calculator": {
    "answer": "Uma calculadora de porcentagem ajuda você a achar porcentagens, variações percentuais e valores relacionados sem fazer a conta à mão.",
    "metaDescription": "Calcule porcentagens de um número, que percentual um número é de outro, e o resultado de um aumento ou uma redução percentual, com o cálculo à vista.",
    "ui": {},
    "content": {
      "about": "A calculadora de porcentagem responde a três perguntas: quanto é X% de Y, que percentual X é de Y, e no que um número se transforma depois de um aumento ou uma redução percentual. Use para uma nota, uma parte de um total ou uma mudança rápida de preço. Um preço com desconto, o imposto sobre vendas e uma gorjeta têm cada um a própria calculadora, porque essas tarefas partem de um preço e de uma alíquota, não destes três padrões.",
      "howTo": [
        "Escolha o modo: X% de Y, que percentual X é de Y, ou aumento ou redução.",
        "Digite os dois números. Para a porcentagem de um número, X é o percentual e Y é o número. Para «que percentual», X é a parte e Y é o total. Para uma variação, X é o percentual e Y é o número de partida.",
        "Se você escolheu aumento ou redução, indique Aumentar ou Reduzir.",
        "Clique em Calcular. O número grande é o resultado. As linhas abaixo mostram o rótulo e a operação. Clique em Redefinir para limpar os campos."
      ],
      "examples": [
        {
          "title": "Quanto é 15% de 80?",
          "body": "Escolha o modo X% de Y. Digite 15 como percentual (X) e 80 como número (Y). Calcular mostra 12. A linha de detalhe é 15 ÷ 100 × 80, e o rótulo é 15% de 80."
        },
        {
          "title": "12 é que percentual de 40?",
          "body": "Escolha o modo de que percentual X é de Y. Digite 12 como valor (X) e 40 como total (Y). Calcular mostra 30%. A linha de detalhe é 12 ÷ 40 × 100."
        },
        {
          "title": "Aumentar 200 em 10%",
          "body": "Escolha aumento ou redução, deixe a direção em Aumentar e digite 10 como variação percentual (X) e 200 como número de partida (Y). Calcular mostra 220. Também mostra o valor adicionado, 20, e o detalhe 200 + (10 ÷ 100 × 200)."
        }
      ],
      "explanation": "Uma porcentagem é um número sobre 100. «X% de Y» multiplica Y por X ÷ 100. «Que percentual X é de Y» divide X por Y e multiplica por 100. Um aumento soma essa fração ao número de partida. Uma redução a subtrai. A página arredonda a operação a 10 casas decimais e depois mostra até 6 casas.",
      "sections": [
        {
          "heading": "Pontos percentuais e porcentagem são perguntas diferentes",
          "paragraphs": [
            "Uma alíquota que passa de 10% para 12% subiu 2 pontos percentuais. A variação relativa é 2 ÷ 10 × 100, que é 20%. As duas frases são verdadeiras e não são intercambiáveis.",
            "Esta página não converte uma na outra por você. Se você já tem a diferença, use «que percentual»: 2 é 20% de 10, então Calcular mostra 20%. Se quiser a nova alíquota depois de somar 20% de 10, use Aumentar: 10 aumentado em 20% mostra 12, com 2 adicionados. Para dois valores já conhecidos, como 80 e depois 100, use a calculadora de variação percentual."
          ]
        },
        {
          "heading": "O desconto, o imposto e a gorjeta usam outras calculadoras",
          "paragraphs": [
            "Um desconto de 25% sobre 80 subtrai 20 e deixa 60. O modo Reduzir pode fazer essa operação: digite 25 e 80, escolha Reduzir e Calcular mostra 60, com um valor subtraído de 20. A linha de detalhe é 80 − (25 ÷ 100 × 80).",
            "A calculadora de desconto foi feita para um preço e um percentual de desconto, e recusa um desconto acima de 100%. A calculadora de imposto sobre vendas acrescenta uma alíquota a um preço. A calculadora de gorjeta divide uma conta segundo um percentual de gorjeta e um número de pessoas. Use essas páginas quando a pergunta for uma conta, não um percentual isolado."
          ]
        },
        {
          "heading": "O zero, a ordem e os símbolos",
          "paragraphs": [
            "0% de 50 é 0. A linha de detalhe é 0 ÷ 100 × 50. Perguntar que percentual 5 é de 0 é recusado. A página indica que o segundo número não pode ser 0 ao achar um percentual.",
            "A ordem dos números é a pergunta. 15% de 80 é 12, e 80% de 15 também é 12, mas 12 é 15% de 80 e 12 é 80% de 15. São resultados diferentes de «que percentual». Digite 12 e 80 para ver 15%. Digite 12 e 15 para ver 80%.",
            "Digite números simples. Um sinal de dólar ou de percentual no campo é um dado inválido. Decimais são aceitos, então 12,5% de 80 é 10."
          ]
        },
        {
          "heading": "Privacidade",
          "paragraphs": [
            "Os números ficam nesta aba do navegador. O cálculo roda na página. Os valores não são enviados a um servidor nem gravados no armazenamento local. Se você aceitar os cookies de análise, a visita pode ser contada. Os números que você digita não fazem parte dessa medição."
          ]
        }
      ],
      "tips": [
        "Escreva a pergunta em uma frase antes de escolher um modo. «15% de 80» e «que percentual de 80 é 15» são tarefas diferentes.",
        "Em um aumento ou uma redução, X é o percentual e Y é o número de partida. Se você trocá-los, o percentual é aplicado ao valor errado.",
        "Use Reduzir quando quiser o número que sobra depois de subtrair um percentual. O resultado grande é o novo valor. O valor subtraído aparece em uma linha à parte.",
        "Confira primeiro um caso redondo. 10% de 50 é 5. Se essa conta mental falhar, o modo ou a ordem dos campos está errada."
      ],
      "limitations": "Esta página só calcula a porcentagem de um número, um número como percentual de outro, ou um aumento ou uma redução percentual. Não consulta uma alíquota nem divide uma gorjeta. A divisão por zero é recusada no modo «que percentual». Um resultado é a operação dos números que você digita. Não é aconselhamento financeiro, fiscal nem acadêmico.",
      "faqs": [
        {
          "question": "Como calculo a porcentagem de um número?",
          "answer": "Escolha o modo X% de Y. Coloque o percentual em X e o número em Y, e clique em Calcular. 15% de 80 é 12, de 15 ÷ 100 × 80."
        },
        {
          "question": "Como acho que percentual um número é de outro?",
          "answer": "Escolha o modo de que percentual X é de Y. Coloque a parte em X e o total em Y. 12 de 40 é 30%, de 12 ÷ 40 × 100. O total não pode ser 0."
        },
        {
          "question": "Como aumento ou reduzo um número em um percentual?",
          "answer": "Escolha aumento ou redução. Coloque o percentual em X e o número de partida em Y, e escolha Aumentar ou Reduzir. Aumentar 200 em 10% mostra 220, com 20 adicionados. Reduzir 80 em 25% mostra 60, com 20 subtraídos."
        },
        {
          "question": "Qual é a diferença entre porcentagem e pontos percentuais?",
          "answer": "Os pontos percentuais são uma simples subtração de duas alíquotas. De 10% para 12% há 2 pontos percentuais. A porcentagem é a variação relativa: 2 é 20% de 10. Esta calculadora não troca automaticamente entre essas duas ideias."
        },
        {
          "question": "O que acontece se eu usar 0?",
          "answer": "0% de um número é 0. Não é possível achar que percentual um número é de 0, então a ferramenta pede outro segundo número. A mensagem indica que o segundo número não pode ser 0 ao achar um percentual."
        },
        {
          "question": "Meus dados são enviados a um servidor?",
          "answer": "Não. Os números que você digita são calculados nesta aba do navegador. O Tools Star Hub não envia esses números a um servidor nem os guarda no armazenamento local."
        },
        {
          "question": "A calculadora de porcentagem é grátis?",
          "answer": "Sim. Você pode achar a porcentagem de um número, que percentual um número é de outro, ou um aumento ou uma redução percentual aqui sem pagar nem criar uma conta."
        },
        {
          "question": "Como inverto um percentual para achar o número original?",
          "answer": "Divida o valor conhecido pelo percentual em decimal (por exemplo, 80 ÷ 0,2) para recuperar a base antes de aplicar o percentual."
        },
        {
          "question": "Qual é a diferença entre um aumento percentual e uma margem de lucro?",
          "answer": "Os dois sobem um número em um percentual; a margem comercial costuma partir do custo, enquanto «aumentar em» pode se aplicar a qualquer base que você escolher."
        },
        {
          "question": "Posso calcular descontos sucessivos com esta ferramenta?",
          "answer": "Aplique cada desconto ao novo valor, na ordem; não some os percentuais para subtrair uma vez só."
        },
        {
          "question": "Como os percentuais de gorjeta se relacionam com a conta?",
          "answer": "Digite a conta como base e o percentual de gorjeta como percentual para ver o valor da gorjeta e, se quiser, o total."
        },
        {
          "question": "Por que 10% de 50 não é o mesmo que 50% de 10?",
          "answer": "Neste caso os dois dão 5 (0,10 × 50 e 0,50 × 10), mas em «que percentual» a ordem muda o resultado: nomeie sempre a base com clareza."
        },
        {
          "question": "Como expresso uma razão como percentual?",
          "answer": "Divida a parte pelo total e multiplique por 100 para obter o percentual."
        },
        {
          "question": "Percentuais negativos fazem sentido?",
          "answer": "Sim, para reduções ou perdas: interprete o sinal como a direção em relação à base que você digitou."
        },
        {
          "question": "Quão precisos são os resultados decimais?",
          "answer": "Os resultados usam a aritmética de ponto flutuante habitual; arredonde para centavos ou para percentuais inteiros ao informar dinheiro ou notas."
        },
        {
          "question": "E se eu precisar de partes por milhão em vez de percentual?",
          "answer": "Converta: 1% = 10.000 ppm. Esta calculadora trabalha em percentuais."
        },
        {
          "question": "Como os professores devem ponderar os percentuais das provas?",
          "answer": "Converta cada nota em pontos com o respectivo peso e depois combine-os; simplesmente calcular a média dos percentuais ignora os pesos diferentes."
        },
        {
          "question": "A ferramenta lida com cadeias de percentual sobre percentual?",
          "answer": "Execute cada passo em separado sobre o valor atualizado para que a acumulação fique correta."
        },
        {
          "question": "Posso usá-la para passar de preços sem imposto a preços com imposto?",
          "answer": "Para acrescentar o imposto, aumente conforme a alíquota; para tirá-lo de um preço bruto, divida por (1 + a alíquota)."
        },
        {
          "question": "Por que minha planilha difere em um centavo?",
          "answer": "O modo de arredondamento e a precisão intermediária são diferentes; iguale as regras de arredondamento (bancário ou para cima a partir da metade) ao conciliar."
        }
      ]
    }
  },
  "percentage-change-calculator": {
    "answer": "Uma calculadora de variação percentual mostra quanto um número aumentou ou diminuiu em relação ao valor inicial.",
    "metaDescription": "Compare um número original com um novo e veja a variação percentual. De 80 para 100 é uma alta de 25%; de 100 para 80, uma queda de 20%.",
    "ui": {},
    "content": {
      "about": "Compare um número original com um novo e veja o aumento ou a redução em percentual. Use quando um preço, uma nota ou uma medida mudou e você precisa do tamanho dessa mudança. Passar de 80 para 100 é um aumento de 25%, enquanto voltar de 100 para 80 é uma redução de 20%, porque os números de partida são diferentes.",
      "howTo": [
        "Digite o valor original e o valor novo.",
        "Clique em Calcular para ver a variação percentual.",
        "Um resultado positivo é um aumento. Um resultado negativo é uma redução."
      ],
      "examples": [
        {
          "title": "De 80 para 100",
          "body": "O valor subiu 20, o que é um aumento de 25%."
        },
        {
          "title": "De 100 para 80",
          "body": "O valor caiu 20, o que é uma redução de 20%."
        }
      ],
      "explanation": "A variação percentual é (novo − original) ÷ original × 100. Subir 25% e depois cair 20% não são mudanças do mesmo tamanho, porque os pontos de partida são diferentes.",
      "limitations": "Um valor original de 0 é recusado, porque a variação é dividida por esse número inicial. Quando os dois valores são 0, o resultado é 0%. Esta página não calcula a porcentagem de um número nem um preço com desconto.",
      "faqs": [
        {
          "question": "A calculadora de variação percentual é grátis?",
          "answer": "Sim. Comparar um valor original com um novo para obter o aumento ou a redução em percentual é grátis e não exige conta."
        },
        {
          "question": "Por que não posso usar 0 como valor original?",
          "answer": "Dividir por zero não está definido. Se os dois valores forem 0, a variação é 0%. Qualquer outro valor novo a partir de 0 não pode ser expresso como um percentual finito."
        },
        {
          "question": "Meus dados são enviados a um servidor?",
          "answer": "Não. Os dois valores são usados só para a divisão nesta página. Nada é enviado nem guardado."
        },
        {
          "question": "Qual é a fórmula da variação percentual?",
          "answer": "Variação percentual = (valor novo − valor original) ÷ valor original × 100. Um resultado positivo é um aumento e um negativo é uma redução."
        },
        {
          "question": "Por que subir de 80 para 100 não é o mesmo que cair de 100 para 80?",
          "answer": "A variação é dividida pelo número inicial. 20 sobre 80 é uma alta de 25%, enquanto 20 sobre 100 é uma queda de 20%."
        },
        {
          "question": "Como meço a variação percentual de um valor antigo para um novo?",
          "answer": "Subtraia o antigo do novo, divida pelo antigo e multiplique por 100 para obter a variação percentual."
        },
        {
          "question": "O que significa uma variação percentual negativa?",
          "answer": "Que o valor novo é menor que o original: uma redução."
        },
        {
          "question": "Em que a variação percentual difere dos pontos percentuais?",
          "answer": "A variação percentual é relativa ao valor inicial; os pontos percentuais são uma diferença absoluta entre dois percentuais."
        },
        {
          "question": "Posso comparar a renda deste mês com a do mês passado?",
          "answer": "Sim: use o mês passado como original e este mês como novo."
        },
        {
          "question": "Por que subir e depois voltar a cair parece assimétrico?",
          "answer": "Subir de 80 para 100 é +25%, mas de 100 para 80 é −20%, porque as bases são diferentes."
        },
        {
          "question": "Como expresso uma variação de 50 para 75?",
          "answer": "(75 − 50) / 50 = 0,5 → um aumento de 50%."
        },
        {
          "question": "E se os dois valores forem negativos?",
          "answer": "A mesma fórmula se aplica, mas interprete os sinais com cuidado em contextos de dívida ou temperatura."
        },
        {
          "question": "Como apresento uma variação percentual em um relatório?",
          "answer": "Indique os dois valores absolutos e o percentual, para o leitor ver a escala e não só a taxa."
        },
        {
          "question": "A ferramenta aceita decimais?",
          "answer": "Sim: use decimais para cifras precisas de finanças ou ciência."
        },
        {
          "question": "Como inverto uma variação percentual conhecida para achar o valor inicial?",
          "answer": "Divida o valor novo por (1 + a variação em decimal) quando a variação foi um aumento."
        },
        {
          "question": "Quando é mais claro falar de pontos percentuais?",
          "answer": "Ao comparar taxas (um desemprego de 5% para 6% é +1 ponto, não uma variação de +20%), para evitar confusão."
        },
        {
          "question": "Valores-base muito pequenos podem dar percentuais enormes?",
          "answer": "Sim: denominadores pequenos inflacionam a variação percentual; mostre também as diferenças absolutas."
        },
        {
          "question": "Como a variação percentual é usada de forma enganosa no marketing?",
          "answer": "Escolhendo uma base favorável ou misturando pontos com percentuais: confira sempre a base."
        },
        {
          "question": "A comparação semana a semana usa a mesma fórmula?",
          "answer": "Sim: só mudam os dois números que você compara, não a operação."
        },
        {
          "question": "O cálculo da variação percentual sai do navegador?",
          "answer": "O cálculo desta página foi feito para ficar na sessão."
        }
      ]
    }
  },
  "discount-calculator": {
    "answer": "Uma calculadora de desconto converte um preço de tabela e um percentual de desconto no valor economizado e no preço final.",
    "metaDescription": "Aplique um percentual de desconto a um preço e veja quanto você economiza e quanto paga. Digite só números, sem símbolos de moeda.",
    "ui": {},
    "content": {
      "about": "Aplique um percentual de desconto a um preço e veja o valor economizado e o preço final. Quem compra ou quem escreve um preço promocional pode usá-la quando o desconto é um percentual simples. Digite só números: um símbolo de moeda não é válido e o desconto não pode passar de 100%.",
      "howTo": [
        "Digite o preço original como um número, sem símbolo de moeda.",
        "Digite o percentual de desconto.",
        "Clique em Calcular para ver o valor do desconto e o preço final."
      ],
      "examples": [
        {
          "title": "50 com 20% de desconto",
          "body": "O desconto é 10. O preço final é 40."
        },
        {
          "title": "Um desconto de 100%",
          "body": "O preço final é 0."
        }
      ],
      "explanation": "O valor do desconto é o preço original × o desconto ÷ 100. O preço final é o preço original menos esse valor. A ferramenta não assume uma moeda, então 19,99 significa 19,99 na unidade que você estiver usando.",
      "limitations": "Digite o preço e o percentual como números simples. Um símbolo de moeda não é válido e um desconto acima de 100% é recusado. O imposto sobre vendas e o rateio de uma gorjeta não fazem parte desta subtração.",
      "faqs": [
        {
          "question": "A calculadora de desconto é grátis?",
          "answer": "Sim. Aplicar um percentual a um preço e mostrar o valor economizado é grátis aqui, sem cadastro."
        },
        {
          "question": "Posso digitar um símbolo de moeda?",
          "answer": "Digite só números. Acrescentar um símbolo como $ ou € será tratado como um dado inválido."
        },
        {
          "question": "Meus dados são enviados a um servidor?",
          "answer": "Não. O preço e o percentual ficam nesta página para a subtração. Não são enviados a um servidor nem guardados no armazenamento local."
        },
        {
          "question": "Como calculo um desconto?",
          "answer": "Multiplique o preço pelo percentual de desconto e divida por 100 para obter o valor abatido; depois subtraia-o do preço. Um desconto de 25% sobre 80 é 20 a menos, então você paga 60."
        },
        {
          "question": "Dois descontos de 20% equivalem a 40%?",
          "answer": "Não. O segundo 20% se aplica ao preço já reduzido, então 20% e depois outros 20% somam 36% de desconto no total, não 40%."
        },
        {
          "question": "Como obtenho rápido um preço com percentual de desconto?",
          "answer": "Multiplique o preço pelo percentual, divida por 100 para o valor abatido e subtraia-o do preço."
        },
        {
          "question": "Qual é a diferença entre a alíquota de desconto e o valor do desconto?",
          "answer": "A alíquota é o percentual; o valor é o que se subtrai em moeda. Os dois aparecem em um detalhamento claro do cupom."
        },
        {
          "question": "Acumular 20% e depois outros 20% é o mesmo que 40%?",
          "answer": "Não. O segundo desconto se aplica ao preço já reduzido, então o corte combinado é menor que 40%."
        },
        {
          "question": "Como sei que percentual de desconto me aplicaram?",
          "answer": "Divida o valor economizado pelo preço original e multiplique por 100."
        },
        {
          "question": "Como acho o preço anterior a um desconto?",
          "answer": "Divida o preço reduzido por (1 − alíquota) quando você conhece a alíquota."
        },
        {
          "question": "Posso digitar um desconto com decimais, como 12,5%?",
          "answer": "Sim, quando a ferramenta admite percentuais decimais. Fique de olho no arredondamento do último centavo."
        },
        {
          "question": "O imposto entra automaticamente no total com desconto?",
          "answer": "Em geral a ferramenta só desconta o preço que você digita. Aplique o imposto em um passo à parte se for preciso."
        },
        {
          "question": "Leve 2 pague 1 é o mesmo que 50% em tudo?",
          "answer": "Só quando os dois itens têm o mesmo preço e o item grátis vale 100%. Com preços diferentes o resultado muda."
        },
        {
          "question": "Por que meu cupom difere em um centavo?",
          "answer": "As lojas arredondam por linha ou depois do imposto de formas diferentes. Siga as regras de arredondamento delas para acertar os centavos."
        },
        {
          "question": "Que preço eu vejo se a alíquota de desconto for zero?",
          "answer": "O preço original, com uma economia de zero."
        },
        {
          "question": "Posso modelar um cupom mais um percentual de desconto?",
          "answer": "Aplique-os na mesma ordem da loja: a sequência muda o total."
        },
        {
          "question": "O frete também entra no desconto?",
          "answer": "Só se a oferta disser isso. Muitas vezes o frete fica de fora das promoções de percentual."
        },
        {
          "question": "Como costumam funcionar os descontos para funcionários?",
          "answer": "As políticas variam: algumas excluem os itens já em oferta. Use as regras publicadas, não uma acumulação genérica."
        },
        {
          "question": "Posso comparar duas ofertas de desconto diferentes?",
          "answer": "Calcule o que você pagaria no final nos dois carrinhos, incluindo o imposto e o frete."
        },
        {
          "question": "Os preços que eu digito ficam guardados depois de calcular?",
          "answer": "Os números ficam só na sessão da página."
        }
      ]
    }
  },
  "tip-calculator": {
    "answer": "Uma calculadora de gorjeta converte uma conta, um percentual de gorjeta e o número de pessoas na gorjeta, no total e na parte de cada um.",
    "metaDescription": "Divida uma conta pelo percentual de gorjeta e pelo número de pessoas, e veja a gorjeta, o total e o que cada um paga.",
    "ui": {},
    "content": {
      "about": "Digite a conta, o percentual de gorjeta e quantas pessoas pagam. A página mostra a gorjeta, o total e a parte de cada um desses dois valores.",
      "howTo": [
        "Digite o valor da conta. Uma conta de 0 é aceita. Uma conta negativa não é aceita.",
        "Escolha 10%, 15%, 18%, 20% ou 25%, ou digite outro percentual.",
        "Indique um número inteiro de pessoas, no mínimo 1.",
        "Clique em Calcular. Copie as quatro linhas se quiser colá-las em uma mensagem."
      ],
      "examples": [
        {
          "title": "Um jantar de 84 para dois",
          "body": "Conta 84, gorjeta 18%, pessoas 2. A gorjeta é 15,12, o total é 99,12 e cada pessoa paga 49,56, dos quais 7,56 são gorjeta."
        },
        {
          "title": "Uma pessoa, sem gorjeta",
          "body": "Conta 12,50, gorjeta 0%, pessoas 1. A gorjeta é 0 e o total segue em 12,50. Use isso quando a conta já inclui uma taxa de serviço que você não quer somar de novo."
        }
      ],
      "explanation": "O valor da gorjeta é a conta multiplicada pelo percentual. O total é a conta mais essa gorjeta. Os dois são divididos pelo número de pessoas. Os rótulos não acrescentam um símbolo de moeda, então os mesmos números servem para reais, dólares, euros ou outra unidade.",
      "features": [
        "Cinco percentuais habituais de gorjeta, além de um percentual personalizado.",
        "Valor da gorjeta, total da conta, gorjeta por pessoa e total por pessoa.",
        "Os valores são arredondados para duas casas decimais."
      ],
      "tips": [
        "Se o cupom já mostra uma gorjeta sugerida, use esse percentual em vez de adivinhar.",
        "Arredonde o total por pessoa para o próximo centavo ou cédula só se o grupo estiver de acordo. Esta página não arredonda para dinheiro vivo."
      ],
      "limitations": "Esta ferramenta não conhece os costumes locais de gorjeta, o imposto que já esteja incluído na conta nem uma taxa de serviço à parte. Digite o valor sobre o qual você realmente quer calcular a gorjeta.",
      "faqs": [
        {
          "question": "Posso dividir uma conta desigual?",
          "answer": "A divisão é em partes iguais. Se uma pessoa pediu mais, calcule primeiro a parte dela da conta e depois aplique a gorjeta a esse valor."
        },
        {
          "question": "O que acontece se eu deixar a conta em branco?",
          "answer": "A página pede um valor de conta. Ela não trata um campo vazio como zero."
        },
        {
          "question": "Meus dados são enviados a um servidor?",
          "answer": "Não. A conta, o percentual de gorjeta e o número de pessoas são calculados nesta aba. Nada é enviado a um servidor."
        },
        {
          "question": "Como calculo uma gorjeta de 20%?",
          "answer": "Multiplique a conta por 0,20. Em uma conta de 45, a gorjeta é 9 e o total é 54. Uma conferência rápida é 10% (desloque a vírgula decimal) vezes dois."
        },
        {
          "question": "Como divido uma conta com gorjeta?",
          "answer": "Some a gorjeta à conta e divida o total pelo número de pessoas. A calculadora mostra a gorjeta, o total e o valor por pessoa."
        },
        {
          "question": "Posso incluir o imposto antes de calcular a gorjeta?",
          "answer": "Sim: digite a conta antes dos impostos se você dá gorjeta só sobre a refeição, ou o total com imposto se esse for o seu costume; indique qual base você usou."
        },
        {
          "question": "Como comparo rápido 15%, 18% e 20%?",
          "answer": "Digite a conta uma vez e teste cada percentual para comparar os totais e as partes por pessoa."
        },
        {
          "question": "A calculadora arredonda para centavos inteiros?",
          "answer": "Os resultados em geral aparecem com duas casas decimais para coincidir com valores em dinheiro ou no cartão."
        },
        {
          "question": "E se cada pessoa quiser deixar uma gorjeta diferente?",
          "answer": "Calcule a gorjeta compartilhada sobre toda a conta e depois ajuste o dinheiro entre os comensais, ou execute a ferramenta uma vez por subgrupo."
        },
        {
          "question": "Posso calcular igualmente a gorjeta sobre gastos de entrega?",
          "answer": "Digite no campo da conta o valor sobre o qual você quer dar gorjeta: só a comida, a comida mais as taxas, ou uma gorjeta fixa de entrega."
        },
        {
          "question": "Como trato um cupom que reduz a conta?",
          "answer": "Decida se você dá gorjeta sobre o total antes ou depois do desconto; muita gente dá gorjeta sobre o valor anterior ao desconto."
        },
        {
          "question": "Uma taxa de serviço é a mesma coisa que uma gorjeta?",
          "answer": "Nem sempre: leia o cupom. Se já inclui uma taxa de serviço obrigatória, esclareça se se espera uma gorjeta extra."
        },
        {
          "question": "Posso deixar uma gorjeta com um valor fixo?",
          "answer": "Sim: se a ferramenta admite um campo de gorjeta personalizado, digite o valor em vez de um percentual, ou converta você mesmo esse valor em percentual."
        },
        {
          "question": "Como divido entre três pessoas se uma não bebe?",
          "answer": "Divida a comida em partes iguais ou por prato, e atribua o custo das bebidas a quem as pediu antes de somar a gorjeta."
        },
        {
          "question": "A ferramenta guarda meus cupons de restaurante?",
          "answer": "Não: os valores ficam na sessão do navegador; limpe os campos quando terminar se você compartilha o aparelho."
        },
        {
          "question": "Que percentual de gorjeta é habitual em um restaurante com serviço de mesa?",
          "answer": "Muitas pessoas usam cerca de 15–20% da conta antes dos impostos nos Estados Unidos, e ajustam conforme a qualidade do serviço e as normas locais. No Brasil a taxa de serviço de 10% é comum, e uma gorjeta extra é opcional."
        },
        {
          "question": "Posso calcular a gorjeta antes de somar o imposto sobre vendas?",
          "answer": "Sim: digite o subtotal sem imposto se essa for a sua regra; então a gorjeta não inclui o imposto na base."
        },
        {
          "question": "Como dou gorjeta se pago com cartão ou em dinheiro?",
          "answer": "A conta é a mesma; em dinheiro você pode arredondar para a cédula mais cômoda depois de ver a gorjeta na calculadora."
        },
        {
          "question": "E se o número de pessoas mudar depois do pedido?",
          "answer": "Digite de novo o número final de pessoas e a conta para que as partes por pessoa se atualizem antes de pagar."
        },
        {
          "question": "Posso usá-la em um buffet ou em um balcão?",
          "answer": "Sim: digite o total e um percentual de acordo com o nível de serviço; em alguns balcões se deixa menos gorjeta do que em um serviço de mesa completo."
        }
      ]
    }
  },
  "sales-tax-calculator": {
    "answer": "Uma calculadora de imposto sobre vendas acrescenta uma alíquota a um preço e mostra o valor do imposto e o preço final.",
    "metaDescription": "Adicione uma alíquota de imposto sobre vendas a um preço e veja o valor do imposto e o preço final, arredondados para centavos.",
    "ui": {},
    "content": {
      "about": "Acrescente uma alíquota de imposto sobre vendas a um preço. Você obtém o valor do imposto e o preço com imposto. Os rótulos são os mesmos para qualquer moeda.",
      "howTo": [
        "Digite o preço original. Deve ser zero ou maior.",
        "Digite o percentual de imposto sobre vendas. Uma alíquota de 0 é válida. Uma alíquota negativa não é.",
        "Clique em Calcular.",
        "Copie o valor do imposto e o preço final se precisar deles em outro lugar."
      ],
      "examples": [
        {
          "title": "Uma alíquota de 8% sobre 49,99",
          "body": "O valor do imposto é 4,00 depois de arredondar para centavos. O preço final é 53,99."
        },
        {
          "title": "Um item isento de imposto",
          "body": "Preço 20, alíquota 0%. O valor do imposto é 0 e o preço final permanece 20."
        }
      ],
      "explanation": "O valor do imposto é o preço original multiplicado pela alíquota e dividido por 100. O preço final é o preço original mais esse imposto. O arredondamento é feito para duas casas decimais, o que coincide com valores habituais em dinheiro, mas pode diferir em um centavo de um caixa que arredonde cada linha de outra forma.",
      "features": [
        "Valor do imposto e preço final, arredondados para duas casas decimais.",
        "Sem símbolo de moeda, para que você possa usar os números com qualquer unidade.",
        "Aceita-se uma alíquota acima de 100%, porque alguns impostos acumulados funcionam assim."
      ],
      "tips": [
        "Se o preço que você tem já inclui o imposto, esta ferramenta vai somá-lo de novo. Parta do preço antes dos impostos.",
        "Se houver um desconto e depois o imposto, use primeiro a calculadora de desconto e tome esse resultado como preço original."
      ],
      "limitations": "Esta ferramenta não consulta a alíquota de uma cidade, um estado ou um país. Você indica o percentual. Tampouco reparte o imposto entre vários itens. Ela modela um imposto sobre vendas que se soma ao preço e não aplica automaticamente o IVA do Reino Unido, o GST/HST do Canadá, o GST da Austrália nem o ICMS ou o ISS do Brasil.",
      "faqs": [
        {
          "question": "Por que não há um cifrão?",
          "answer": "A mesma operação serve para qualquer moeda. Acrescentar um símbolo seria incorreto para muitos leitores."
        },
        {
          "question": "A alíquota pode ser 0?",
          "answer": "Sim. O valor do imposto é 0 e o preço final é igual ao preço original."
        },
        {
          "question": "Meus dados são enviados a um servidor?",
          "answer": "Não. O preço e a alíquota de imposto são calculados nesta aba. Não são enviados a um servidor."
        },
        {
          "question": "Como calculo o imposto sobre vendas?",
          "answer": "Multiplique o preço pela alíquota de imposto e divida por 100; depois some o resultado ao preço. 50 a 8% são 4 de imposto, então o total é 54."
        },
        {
          "question": "Como acho o preço antes dos impostos?",
          "answer": "Divida o total por 1 mais a alíquota em decimal. Um total de 54 com um imposto de 8% é 54 ÷ 1,08 = 50 antes dos impostos."
        },
        {
          "question": "Como obtenho o preço total depois de acrescentar o imposto?",
          "answer": "Digite o preço líquido e o percentual; some o valor do imposto para obter o total bruto."
        },
        {
          "question": "Como recupero o valor antes dos impostos a partir do total do cupom?",
          "answer": "Divida o valor bruto por (1 + a alíquota em decimal) para obter o preço líquido."
        },
        {
          "question": "Por que eu mesmo preciso digitar a alíquota?",
          "answer": "As alíquotas variam conforme o lugar e o produto; a calculadora não consulta jurisdições."
        },
        {
          "question": "Posso usá-la em uma conta de restaurante antes da gorjeta?",
          "answer": "Sim, para o imposto sobre a refeição; acrescente a gorjeta à parte, salvo se as normas locais indicarem outra coisa."
        },
        {
          "question": "Como os carrinhos com vários itens costumam aplicar o imposto?",
          "answer": "Muitos caixas aplicam o imposto ao subtotal com desconto; siga a política do seu ponto de venda para o arredondamento por linha ou por pedido."
        },
        {
          "question": "Que alíquota uso se houver itens tributados e isentos?",
          "answer": "Separe o carrinho: aplique o imposto só às linhas tributadas, com a alíquota correta."
        },
        {
          "question": "O imposto sobre vendas é o mesmo que um preço com IVA incluído?",
          "answer": "Não: o IVA costuma vir incluído; esta ferramenta modela o imposto sobre vendas que se soma ao preço, habitual nos Estados Unidos. Não aplica automaticamente o IVA do Reino Unido, o GST/HST do Canadá, o GST da Austrália nem o ICMS ou o ISS do Brasil."
        },
        {
          "question": "Como as faturas para clientes devem mostrar o imposto?",
          "answer": "Indique o líquido, a alíquota, o valor do imposto e o bruto para que a cobrança fique clara."
        },
        {
          "question": "Posso calcular o imposto só sobre o frete?",
          "answer": "Se o frete é tributável onde você vende, calcule o frete como um valor à parte com essa alíquota."
        },
        {
          "question": "E se a minha cidade e o meu estado acumularem alíquotas diferentes?",
          "answer": "Digite a alíquota combinada que a sua localidade exigir, ou calcule cada camada se as bases forem diferentes."
        },
        {
          "question": "Como os cupons mudam a base de cálculo?",
          "answer": "Muitas vezes o imposto se aplica depois dos cupons da loja; as regras dos marketplaces variam: siga a norma do seu nexo fiscal."
        },
        {
          "question": "Devo arredondar o imposto para duas casas decimais?",
          "answer": "Sim, em moeda; siga o arredondamento da sua contabilidade (por linha ou sobre o subtotal)."
        },
        {
          "question": "Bens digitais podem ter uma alíquota diferente?",
          "answer": "Às vezes: a tributação do produto varia; confirme antes de usar uma alíquota geral de mercadorias."
        },
        {
          "question": "Como confiro um exemplo de 8,25%?",
          "answer": "Imposto ≈ preço × 0,0825; total ≈ preço × 1,0825."
        },
        {
          "question": "O cálculo do imposto sobre vendas sai do navegador?",
          "answer": "O cálculo desta página foi feito para ficar na sessão."
        }
      ]
    }
  },
  "unit-converter": {
    "answer": "Um conversor de unidades troca comprimento, peso e temperatura usando fatores de conversão padrão.",
    "metaDescription": "Converta comprimento, peso ou temperatura entre unidades ao digitar. Não inclui moeda, área nem volume. Temperaturas abaixo do zero absoluto são recusadas.",
    "ui": {},
    "content": {
      "about": "Converta um comprimento, um peso ou uma temperatura de uma unidade para outra. Use para uma receita, um envio ou uma leitura do tempo quando você já conhece o número e só precisa da outra unidade. Moeda, área e volume não estão nesta página, e uma temperatura abaixo do zero absoluto é recusada.",
      "howTo": [
        "Escolha uma categoria: comprimento, peso/massa ou temperatura.",
        "Digite um valor e escolha as unidades de origem e de destino.",
        "O resultado se atualiza enquanto você digita. Use Trocar unidades para inverter a conversão."
      ],
      "examples": [
        {
          "title": "Comprimento",
          "body": "1 metro = 100 centímetros = cerca de 3,28084 pés."
        },
        {
          "title": "Temperatura",
          "body": "0 °C = 32 °F = 273,15 K."
        }
      ],
      "explanation": "As conversões de comprimento e peso multiplicam por meio de uma unidade-base (metro ou quilograma). As de temperatura não são simples múltiplos: usam as fórmulas de Celsius, Fahrenheit e Kelvin e recusam valores abaixo do zero absoluto.",
      "limitations": "Comprimento, peso e temperatura são as únicas conversões desta página. Ela não converte moeda, área nem volume. Uma temperatura abaixo do zero absoluto é recusada. O comprimento e a massa usam fatores fixos, então o resultado pode mostrar mais casas decimais do que um instrumento de medida daria.",
      "faqs": [
        {
          "question": "O conversor de unidades é grátis?",
          "answer": "Sim. Você pode converter comprimento, peso e temperatura aqui sem pagar nem criar uma conta."
        },
        {
          "question": "Essas conversões são exatas?",
          "answer": "O comprimento e a massa usam fatores padrão internacionais, como 1 polegada = 2,54 centímetros exatos. A temperatura usa as fórmulas padrão."
        },
        {
          "question": "Meus dados são enviados a um servidor?",
          "answer": "Não. O valor e as unidades que você escolhe são convertidos nesta aba do navegador. O Tools Star Hub não envia esse valor a um servidor nem o guarda no armazenamento local."
        },
        {
          "question": "Como converto Celsius em Fahrenheit?",
          "answer": "Multiplique o valor em Celsius por 9/5 e some 32. Por exemplo, 20 °C é 20 × 9 ÷ 5 + 32 = 68 °F."
        },
        {
          "question": "Quantos centímetros tem uma polegada?",
          "answer": "Uma polegada é exatamente 2,54 centímetros, então 12 polegadas (um pé) são 30,48 centímetros."
        },
        {
          "question": "Como converto quilômetros em milhas?",
          "answer": "Digite o valor em quilômetros, escolha as unidades de comprimento de origem e de destino, e leia na hora o resultado em milhas."
        },
        {
          "question": "Posso converter peso além de comprimento?",
          "answer": "Sim: escolha unidades de massa como quilogramas e libras, ou onças, conforme o que o conversor listar."
        },
        {
          "question": "A ferramenta admite unidades de volume de líquidos?",
          "answer": "Não nesta página. A conversão é só de comprimento, peso e temperatura. Volume (litros, galões, xícaras) não está incluído aqui."
        },
        {
          "question": "Quão precisas são as conversões entre o sistema métrico e o imperial?",
          "answer": "Elas usam fatores padrão; pequenas diferenças de arredondamento podem aparecer em muitas casas decimais."
        },
        {
          "question": "Posso converter temperatura e comprimento na mesma sessão?",
          "answer": "Mude de categoria quando precisar; cada conversão usa os campos que você definir para essa categoria."
        },
        {
          "question": "Qual é o fator de polegadas para centímetros?",
          "answer": "Uma polegada equivale exatamente a 2,54 centímetros segundo as definições métricas modernas."
        },
        {
          "question": "Como passo uma área do sistema métrico para pés quadrados?",
          "answer": "Esta página não converte área. Use um conversor de área se precisar passar metros quadrados para pés quadrados."
        },
        {
          "question": "Valores em notação científica funcionam?",
          "answer": "Se o campo os aceitar, sim; se não, digite um decimal normal para valores muito grandes ou muito pequenos."
        },
        {
          "question": "Posso converter medidas de cozinha como xícaras em gramas?",
          "answer": "Passar de volume para massa exige a densidade, e esta página não converte volume. Um conversor de unidades puro só troca volume ou massa dentro do mesmo tipo de medida."
        },
        {
          "question": "Como converto milhas náuticas para planejar uma viagem?",
          "answer": "Escolha milhas náuticas se elas aparecerem em comprimento e converta-as em quilômetros ou milhas terrestres para os mapas que usem essas unidades."
        },
        {
          "question": "O arredondamento muda em cadeias de cálculos?",
          "answer": "Converta em um só passo quando puder; encadear muitos passos arredondados pode acumular pequenos erros."
        },
        {
          "question": "Posso converter bytes em megabytes aqui?",
          "answer": "Só se houver uma categoria de tamanho de dados; caso contrário, use um conversor específico de armazenamento digital. Esta página não inclui essa categoria."
        },
        {
          "question": "Como troco rápido as unidades de origem e de destino?",
          "answer": "Troque os menus de unidades ou use o controle de troca se ele aparecer, e calcule de novo com o mesmo número."
        },
        {
          "question": "Os galões dos EUA e do Reino Unido são tratados iguais?",
          "answer": "Não: o galão americano e o imperial são diferentes. Esta página não converte volume, então escolha o tipo de galão correto em um conversor de volume."
        },
        {
          "question": "Os estudantes podem usá-lo para trocas de unidades nas tarefas?",
          "answer": "Sim, para conversões padrão; ainda assim, mostre o seu procedimento se a tarefa exigir passos manuais."
        }
      ]
    }
  },
  "random-number-generator": {
    "answer": "Um gerador de números aleatórios sorteia inteiros ou decimais dentro de um intervalo usando crypto.getRandomValues.",
    "metaDescription": "Gere números inteiros ou decimais aleatórios com crypto.getRandomValues, inclusive sorteios sem repetição, entre os limites que você escolher.",
    "ui": {},
    "content": {
      "about": "Sorteie de 1 a 200 inteiros ou decimais entre os limites que você definir. Use para um sorteio informal, como cinco números sem repetir de 1 a 10. O modo sem repetição só funciona com números inteiros, e pedir mais valores únicos do que o intervalo contém é recusado.",
      "howTo": [
        "Digite um mínimo, um máximo e quantos números você quer gerar.",
        "Escolha inteiro ou decimal. Se quiser, exija inteiros sem repetição.",
        "Gere e depois copie os resultados."
      ],
      "examples": [
        {
          "title": "Cinco inteiros sem repetir de 1 a 10",
          "body": "A ferramenta sorteia sem reposição. Pedir 11 valores únicos nesse intervalo é recusado."
        },
        {
          "title": "Decimais",
          "body": "Os valores são arredondados para seis casas decimais a partir de um intervalo unitário de 32 bits. O modo sem repetição não é oferecido para decimais."
        }
      ],
      "explanation": "Os inteiros usam crypto.getRandomValues() com amostragem por rejeição, para que cada valor do intervalo seja igualmente provável. Assim se evita o viés do módulo. O gerador é adequado para sorteios informais. Não é apresentado como segurança criptográfica para todos os usos estatísticos ou de segurança.",
      "limitations": "Cada limite deve estar dentro de ±1.000.000.000, e a quantidade deve ser um número inteiro de 1 a 200. O modo sem repetição só funciona com inteiros e recusa uma quantidade maior que o intervalo. Os decimais são arredondados para seis casas. É um sorteio informal, não um sorteio de loteria nem um gerador de chaves.",
      "faqs": [
        {
          "question": "O gerador de números aleatórios é grátis?",
          "answer": "Sim. Sortear inteiros ou decimais neste navegador é grátis e sem cadastro."
        },
        {
          "question": "É criptograficamente seguro?",
          "answer": "Ele usa o gerador CSPRNG de Web Crypto em cada amostra, com uma seleção de inteiros sem viés. Isso é mais forte que Math.random(). Ainda assim, não é um projeto completo para loterias, chaves nem protocolos de amostragem científica."
        },
        {
          "question": "Por que não posso usar o modo sem repetição com decimais?",
          "answer": "Os decimais são arredondados para uma precisão fixa, então a unicidade é ambígua. Use inteiros quando precisar de um conjunto sem repetições."
        },
        {
          "question": "Como escolho um número aleatório entre 1 e 10?",
          "answer": "Coloque o mínimo em 1 e o máximo em 10, deixe selecionados os inteiros e gere. Cada número inteiro do intervalo tem a mesma probabilidade."
        },
        {
          "question": "Como sorteio números sem repetição?",
          "answer": "Ative o modo sem repetição. Ele funciona com inteiros, e a quantidade não pode ser maior que o número de valores do intervalo."
        },
        {
          "question": "Como escolho um inteiro aleatório dentro de um intervalo mínimo–máximo?",
          "answer": "Digite os limites inclusivos, gere e copie o resultado para o seu sorteio ou o seu jogo."
        },
        {
          "question": "Posso sortear vários números únicos para uma rifa?",
          "answer": "Ative o modo sem repetição, defina quantos você precisa e gere o conjunto."
        },
        {
          "question": "Quando convém permitir duplicatas?",
          "answer": "Em jogadas tipo dado e em amostragens com reposição; use o modo sem repetição em rifas sem reposição."
        },
        {
          "question": "Como gero um número aleatório para escolher alunos na turma?",
          "answer": "Defina o intervalo conforme o tamanho da lista (ou atribua um número a cada nome) e gere de forma justa na frente da turma."
        },
        {
          "question": "Os sorteios no navegador servem para loterias importantes?",
          "answer": "Não: use processos de sorteio certificados para loterias com dinheiro ou com valor legal."
        },
        {
          "question": "Posso colocar o mesmo mínimo e o mesmo máximo?",
          "answer": "Isso só dá esse único valor; amplie o intervalo se precisar de variedade."
        },
        {
          "question": "Como funcionam os limites negativos?",
          "answer": "O mínimo pode estar abaixo de zero; a ferramenta escolhe de forma uniforme em todo o intervalo de inteiros inclusivo."
        },
        {
          "question": "E se eu precisar de um decimal aleatório entre 0 e 1?",
          "answer": "Use o modo decimal se ele for oferecido, ou dimensione um inteiro sorteado; não afirme que isso tem segurança criptográfica."
        },
        {
          "question": "Como os streamers devem mostrar um sorteio justo?",
          "answer": "Mostre na tela o intervalo e o resultado, e considere gravar o sorteio."
        },
        {
          "question": "Recarregar muda automaticamente o último número?",
          "answer": "Só uma nova ação de gerar deveria fazer isso; não tome um campo antigo como um sorteio novo."
        },
        {
          "question": "Posso excluir um número que já ganhou?",
          "answer": "Reduza o intervalo ou use o sorteio múltiplo sem repetição para não repetir ganhadores."
        },
        {
          "question": "Em que os aplicativos diferem desta página em aleatoriedade?",
          "answer": "As APIs do sistema operacional podem oferecer opções CSPRNG mais fortes; esta página é para escolhas informais do dia a dia."
        },
        {
          "question": "Que intervalo é amplo demais para um sorteio rápido?",
          "answer": "Intervalos enormes podem ser incômodos de mostrar: mantenha uns limites práticos para o seu caso."
        },
        {
          "question": "Devo usar uma semente para exercícios reproduzíveis?",
          "answer": "Só se existir uma opção de semente e você precisar de demonstrações repetíveis na aula; sem semente está bem para um uso informal."
        },
        {
          "question": "Escolher um número envia a minha configuração de intervalo?",
          "answer": "A geração foi feita para ficar na sessão do navegador."
        }
      ]
    }
  },
  "square-footage-calculator": {
    "answer": "Uma calculadora de metragem multiplica o comprimento pela largura de cada cômodo e depois soma os cômodos. Os resultados aparecem em pés quadrados e metros quadrados.",
    "metaDescription": "Multiplique o comprimento pela largura de cada cômodo e some os cômodos. Resultados em pés quadrados e metros quadrados para espaços retangulares.",
    "ui": {},
    "content": {
      "about": "Multiplique o comprimento pela largura de cada cômodo e depois some os cômodos. O total aparece em pés quadrados e metros quadrados.",
      "howTo": [
        "Digite o comprimento e a largura do primeiro cômodo.",
        "Escolha pés ou metros.",
        "Adicione outro cômodo se precisar.",
        "Clique em Calcular."
      ],
      "examples": [
        {
          "title": "Um cômodo de 10 por 10 pés",
          "body": "A área é de 100 pés quadrados, que são 9,29 metros quadrados."
        }
      ],
      "explanation": "A área é o comprimento vezes a largura. Um cômodo digitado em pés é convertido com 0,09290304 metros quadrados por pé quadrado. Um cômodo digitado em metros é convertido no sentido contrário. As linhas extras em branco são omitidas.",
      "features": [
        "Um cômodo ou vários.",
        "Pés ou metros em cada cômodo.",
        "Totais em pés quadrados e metros quadrados."
      ],
      "tips": [
        "Deixe em branco um cômodo extra se você não precisar dele.",
        "Use o mesmo tipo de medida nos dois lados de um cômodo."
      ],
      "limitations": "A página mede retângulos. Não subtrai armários nem soma triângulos.",
      "faqs": [
        {
          "question": "Como se calcula a área em pés quadrados?",
          "answer": "Multiplique o comprimento pela largura. Com vários cômodos, some a área de cada um."
        },
        {
          "question": "Como se convertem os pés quadrados em metros quadrados?",
          "answer": "Um pé quadrado é 0,3048 por 0,3048 metros quadrados, que é 0,09290304."
        },
        {
          "question": "Os cômodos podem usar unidades diferentes?",
          "answer": "Sim. Cada cômodo tem a própria opção de pés ou metros, e os totais são convertidos para as duas unidades."
        },
        {
          "question": "E se um cômodo extra estiver em branco?",
          "answer": "Uma linha sem comprimento nem largura é omitida."
        },
        {
          "question": "Medidas negativas são aceitas?",
          "answer": "Não. Um comprimento ou uma largura negativa é recusado."
        },
        {
          "question": "Esses números são enviados a um servidor?",
          "answer": "Não. O comprimento e a largura são multiplicados nesta aba. Essas medidas não são enviadas a um servidor."
        },
        {
          "question": "Como divido uma planta em forma de L?",
          "answer": "Divida o L em dois retângulos, calcule a área de cada um e some-as para obter o total do cômodo."
        },
        {
          "question": "Devo incluir os armários no total dos cômodos?",
          "answer": "Inclua-os quando o piso ou a pintura cobrirem esses espaços; omita-os para comparar a área habitável."
        },
        {
          "question": "Como trato os tetos abobadados para o piso?",
          "answer": "O piso usa a área da planta, não a altura das paredes: meça só o comprimento × a largura da planta."
        },
        {
          "question": "Posso misturar pés e polegadas em um cômodo?",
          "answer": "Converta primeiro tudo para pés decimais (ou para metros) para que as unidades fiquem coerentes na calculadora."
        },
        {
          "question": "E os espaços triangulares?",
          "answer": "Use ½ × base × altura em cada triângulo e some essas áreas aos demais cômodos."
        },
        {
          "question": "A espessura das paredes externas muda a área interna?",
          "answer": "A área habitável interna usa medidas internas; os construtores podem indicar medidas externas de outra forma."
        },
        {
          "question": "Quão precisa é uma aplicação de medição do telefone?",
          "answer": "Serve para estimativas; confira com fita métrica as reformas importantes, como pedidos de rodapé e piso."
        },
        {
          "question": "Os corredores entram na área total da moradia?",
          "answer": "Sim, para o total da moradia; omita-os quando você só precisar do piso de um cômodo."
        },
        {
          "question": "Como converto para jardas quadradas para carpete?",
          "answer": "Divida os pés quadrados por 9 para obter jardas quadradas e acrescente a perda que o instalador recomendar."
        },
        {
          "question": "Posso estimar a tinta a partir da área?",
          "answer": "A tinta precisa da área das paredes (altura × faces do perímetro), não só da área do piso."
        },
        {
          "question": "E se os cômodos compartilharem uma cozinha aberta?",
          "answer": "Meça a planta aberta combinada como um retângulo ou divida-a por um limite claro que você escolher."
        },
        {
          "question": "As janelas salientes precisam de um tratamento especial?",
          "answer": "Some a área do saliente como um retângulo ou um trapézio extra além do cômodo principal."
        },
        {
          "question": "A área locável é a mesma coisa que a área útil?",
          "answer": "As definições de locação variam; confirme se os corredores comuns ou as paredes entram no seu mercado."
        },
        {
          "question": "Por que duas medições não coincidiram?",
          "answer": "Um deslizamento da fita, os móveis no caminho ou misturar paredes internas e externas costumam explicar as pequenas diferenças."
        }
      ]
    }
  },
  "aspect-ratio-calculator": {
    "answer": "Uma calculadora de proporção simplifica uma largura e uma altura, ou acha o lado que falta a partir de uma proporção. Ela não redimensiona um arquivo de imagem.",
    "metaDescription": "Simplifique uma largura e uma altura em uma proporção, ou ache o lado que falta a partir de uma proporção e de um lado conhecido. Não redimensiona imagens.",
    "ui": {},
    "content": {
      "about": "Simplifique uma largura e uma altura em uma proporção, ou calcule o lado que falta a partir de uma proporção e de um lado conhecido.",
      "howTo": [
        "Escolha simplificar, achar a altura ou achar a largura.",
        "Digite o tamanho ou a proporção.",
        "Clique em Calcular."
      ],
      "examples": [
        {
          "title": "1920 por 1080",
          "body": "1920 por 1080 se simplifica para 16:9."
        }
      ],
      "explanation": "Os dois lados são dimensionados para números inteiros e divididos pelo máximo divisor comum. Quando falta um lado, ele é o lado conhecido multiplicado pelo outro termo da proporção e dividido pelo termo correspondente. A página não abre nem redimensiona uma imagem.",
      "features": [
        "Uma proporção simplificada de números inteiros.",
        "A altura a partir de uma proporção e de uma largura.",
        "A largura a partir de uma proporção e de uma altura."
      ],
      "tips": [
        "Use a mesma unidade para a largura e a altura.",
        "Um termo da proporção deve ser maior que 0."
      ],
      "limitations": "Os tamanhos decimais são reduzidos a partir de uma escala arredondada, então a proporção mostrada pode ser um par de inteiros em vez dos decimais originais.",
      "faqs": [
        {
          "question": "Como se calcula uma proporção (relação de aspecto)?",
          "answer": "Divida a largura e a altura pelo máximo divisor comum. 1920 por 1080 é 16:9."
        },
        {
          "question": "Como se acha o lado que falta?",
          "answer": "Multiplique o lado conhecido pelo outro termo da proporção e divida pelo termo correspondente. Uma largura de 800 em 4:3 tem uma altura de 600."
        },
        {
          "question": "Isso redimensiona uma imagem?",
          "answer": "Não. Só calcula a proporção ou o lado que falta."
        },
        {
          "question": "Os lados podem ser decimais?",
          "answer": "Sim. Devem ser maiores que 0. A proporção é reduzida depois de dimensionar os decimais para números inteiros."
        },
        {
          "question": "E se um lado for zero?",
          "answer": "Tamanhos zero e negativos são recusados."
        },
        {
          "question": "Esses números são enviados a um servidor?",
          "answer": "Não. A largura, a altura e a proporção são calculadas nesta aba. Não são enviadas a um servidor."
        },
        {
          "question": "Qual é uma proporção habitual para vídeos do YouTube?",
          "answer": "16:9 é a proporção panorâmica padrão para a maioria dos vídeos do YouTube e da televisão. Ainda aparece conteúdo antigo em 4:3, mas 16:9 é o tamanho de planejamento padrão."
        },
        {
          "question": "Como obtenho um recorte quadrado 1:1?",
          "answer": "Defina a proporção em 1:1 e digite a largura que quiser; a altura coincide. É útil para fotos de perfil e muitas publicações sociais."
        },
        {
          "question": "Posso achar a largura se conheço a altura e a proporção?",
          "answer": "Sim. Digite o lado conhecido e o par da proporção, e leia o lado que falta que a calculadora devolve."
        },
        {
          "question": "Que proporção devo usar para os stories do Instagram?",
          "answer": "O vertical 9:16 é o quadro habitual de tela cheia para stories e Reels. Consulte a documentação atual da plataforma se precisar de margens de segurança."
        },
        {
          "question": "A proporção muda sozinha o tamanho do arquivo?",
          "answer": "Não. A proporção é a forma, não os megabytes. O número de pixels e a compactação decidem o tamanho do arquivo depois de redimensionar."
        },
        {
          "question": "O que os cineastas querem dizer com 2,39:1?",
          "answer": "É uma proporção panorâmica de cinema. Você pode digitar 2,39 e 1 como lados da proporção para planejar as faixas pretas."
        },
        {
          "question": "Por que os telefones mostram faixas pretas em alguns vídeos?",
          "answer": "A proporção do vídeo não coincide com a da tela. As faixas horizontais ou verticais preenchem as bordas sem uso."
        },
        {
          "question": "Posso usar proporções com três números, como 16:9:1?",
          "answer": "Esta ferramenta espera dois lados. Reduza as especificações de várias partes a largura:altura antes de digitá-las."
        },
        {
          "question": "Com que precisão devem ser digitados os lados decimais?",
          "answer": "Duas ou três casas decimais costumam bastar para diagramar. Uma precisão extrema raramente muda as decisões de recorte visíveis."
        },
        {
          "question": "DPI é a mesma coisa que a proporção?",
          "answer": "Não. O DPI é a resolução de impressão. A proporção (relação de aspecto) é só a relação entre a largura e a altura."
        },
        {
          "question": "Como ajusto uma foto à proporção de uma moldura?",
          "answer": "Calcule a proporção da moldura e recorte a foto nessa forma para que ela seja impressa sem distorcer."
        },
        {
          "question": "O que acontece se eu trocar a largura e a altura?",
          "answer": "Você inverte a orientação: o formato horizontal passa a vertical. Digite os lados na ordem que corresponda à orientação que você quer."
        },
        {
          "question": "Pode substituir um redimensionador de imagens?",
          "answer": "Ela só faz a conta. Use depois um redimensionador ou um recortador para mudar os pixels de verdade."
        },
        {
          "question": "Os dados da proporção ficam guardados quando eu saio?",
          "answer": "Eles ficam no navegador durante a sessão. Nada é enviado só para calcular o lado que falta."
        }
      ]
    }
  },
  "gpa-calculator": {
    "answer": "Uma calculadora de GPA divide o total de pontos de nota pelo total de créditos. Os pontos de nota são os pontos do curso vezes os créditos. A página usa uma tabela habitual de letras sobre 4,0, e uma instituição pode usar outra.",
    "metaDescription": "Calcule um GPA ponderado por créditos a partir de notas com letra ou pontos na escala habitual de 4,0. Sua instituição pode usar outra tabela de equivalências.",
    "ui": {},
    "content": {
      "about": "Adicione cursos com uma nota em letra ou em pontos numéricos e um valor de créditos. O GPA é o total de pontos de nota dividido pelo total de créditos.",
      "howTo": [
        "Adicione cada curso.",
        "Digite uma letra da tabela de 4,0, ou mude o curso para pontos numéricos.",
        "Digite os créditos.",
        "Clique em Calcular."
      ],
      "examples": [
        {
          "title": "Dois cursos",
          "body": "Um A de 3 créditos e um B de 1 crédito somam 15 pontos de nota sobre 4 créditos, então o GPA é 3,75 nesta tabela."
        }
      ],
      "explanation": "Cada curso contribui com seus pontos de nota multiplicados pelos seus créditos. Esses produtos são somados e depois divididos pela soma dos créditos. Um curso de zero créditos não contribui com nada. Se todos os cursos tiverem zero créditos, não há GPA a dividir.",
      "features": [
        "GPA ponderado por créditos.",
        "Notas em letra ou em pontos numéricos.",
        "Total de créditos e total de pontos de nota."
      ],
      "tips": [
        "A tabela de letras aparece acima do formulário.",
        "Os pontos numéricos devem estar entre 0 e 4,0 nesta escala."
      ],
      "limitations": "Nem todas as instituições usam esta tabela. As letras com mais e menos seguem os valores que aparecem na página, não o catálogo de uma instituição.",
      "faqs": [
        {
          "question": "Como se calcula o GPA?",
          "answer": "Multiplique os pontos de nota de cada curso pelos seus créditos, some esses produtos e divida pelo total de créditos."
        },
        {
          "question": "Que escala de notas é usada?",
          "answer": "Uma tabela habitual de 4,0: A é 4,0, A- é 3,7, B+ é 3,3, B é 3,0, e o restante da tabela aparece na página."
        },
        {
          "question": "Posso digitar pontos de nota numéricos?",
          "answer": "Sim. Marque esse curso como numérico e digite um valor de 0 a 4,0."
        },
        {
          "question": "E se um curso tiver zero créditos?",
          "answer": "Ele não muda os totais. Se os únicos créditos forem zero, a página não divide."
        },
        {
          "question": "Todas as instituições usam esta tabela?",
          "answer": "Não. Use os pontos da sua instituição se eles forem diferentes e digite-os como pontos numéricos."
        },
        {
          "question": "Esses números são enviados a um servidor?",
          "answer": "Não. As notas e os créditos são calculados nesta aba. Nada é enviado."
        },
        {
          "question": "Como calculo o GPA de um semestre?",
          "answer": "Digite a nota e as horas de crédito de cada curso. A ferramenta pondera os pontos por créditos e divide pelo total de créditos."
        },
        {
          "question": "Qual é a diferença entre o GPA e o GPA ponderado?",
          "answer": "Algumas instituições somam pontos extras por turmas de honras ou AP. Confirme que o modo da sua calculadora coincide com a escala do seu histórico."
        },
        {
          "question": "Posso misturar notas em letra e percentuais?",
          "answer": "Só se você convertê-los antes com a tabela oficial da sua instituição. Não invente conversões que a sua secretaria acadêmica não use."
        },
        {
          "question": "Como os cursos reprovados afetam o GPA?",
          "answer": "Um F costuma contribuir com zero pontos e ainda assim conta os créditos tentados, o que baixa a média. As políticas de repetição variam conforme a instituição."
        },
        {
          "question": "O que é o GPA acumulado em relação ao GPA do período?",
          "answer": "O GPA do período cobre um semestre. O GPA acumulado reúne todos os créditos com nota até a data. Digite com cuidado os totais anteriores ao combiná-los."
        },
        {
          "question": "As turmas de aprovação/reprovação entram no GPA?",
          "answer": "Muitas vezes entram nos créditos obtidos, mas não na média. Siga o seu catálogo; omita-as se estiverem excluídas."
        },
        {
          "question": "Com quantas casas decimais as instituições informam?",
          "answer": "Muitas mostram duas ou três casas decimais e têm as próprias regras de arredondamento. Use a cifra da secretaria para solicitações oficiais."
        },
        {
          "question": "Posso projetar o meu GPA se eu tirar um A no próximo período?",
          "answer": "Sim, somando aos seus totais atuais os cursos previstos com as notas esperadas. Trate isso como uma previsão, não como uma promessa."
        },
        {
          "question": "E se os créditos aparecerem como unidades ou horas?",
          "answer": "Use de forma coerente o peso numérico que a sua instituição usar. Misturar horas trimestrais e semestrais sem converter vai distorcer o GPA."
        },
        {
          "question": "Coincide com todas as escalas internacionais?",
          "answer": "Não. As escalas variam muito. Converta só com um método oficial de avaliação de credenciais quando solicitar entre sistemas diferentes."
        },
        {
          "question": "Como corrijo um erro que distorce o resultado?",
          "answer": "Revise cada campo de nota e de créditos. Uma só hora de crédito errada pode mover o GPA mais do que mudar uma nota em letra."
        },
        {
          "question": "Os cursos repetidos devem substituir as notas anteriores?",
          "answer": "Só quando a política da instituição disser isso. Algumas substituem e outras fazem a média das duas. Modele a política que você realmente tem."
        },
        {
          "question": "Dá para usar a mesma ferramenta para o GPA do ensino médio?",
          "answer": "Sim, se a tabela de letras para pontos coincidir. As escalas ponderadas do ensino médio precisam do modo ponderado ou de pontos manuais."
        },
        {
          "question": "Minhas notas são guardadas em um servidor?",
          "answer": "Elas ficam no navegador durante a sessão. Limpe o formulário ao terminar se a privacidade importar para você."
        }
      ]
    }
  },
  "business-days-calculator": {
    "answer": "Uma calculadora de dias úteis conta de segunda a sexta entre duas datas. Não aplica um calendário de feriados. Você mesmo pode excluir datas.",
    "metaDescription": "Conte os dias úteis de segunda a sexta entre duas datas e deixe de fora as datas que você excluir. Não aplica um calendário de feriados.",
    "ui": {},
    "content": {
      "about": "Conte de segunda a sexta entre duas datas. Você pode deixar de fora as datas que não devam contar.",
      "howTo": [
        "Digite as datas de início e fim.",
        "Escolha se a data de fim é incluída.",
        "Adicione as datas excluídas, uma por linha, ou deixe esse quadro vazio.",
        "Clique em Calcular."
      ],
      "examples": [
        {
          "title": "De segunda a sexta",
          "body": "De 1º de janeiro de 2024 a 5 de janeiro de 2024 são cinco dias úteis."
        },
        {
          "title": "Um fim de semana",
          "body": "De 6 de janeiro de 2024 a 7 de janeiro de 2024 são sábado e domingo, então a contagem de dias úteis é 0."
        }
      ],
      "explanation": "Cada data desde o início até o fim, quando o fim é incluído, é um dia útil ou um dia de fim de semana. De segunda a sexta contam como dias úteis, salvo se você tiver excluído essa data. O sábado e o domingo contam como dias de fim de semana. Se a data de fim for anterior, a página conta o intervalo entre as duas datas.",
      "features": [
        "Contagem de dias úteis e de fim de semana.",
        "Uma data de fim opcional.",
        "Datas excluídas que você mesmo digita, sem uma lista de feriados integrada."
      ],
      "tips": [
        "Digite as datas excluídas no formato AAAA-MM-DD.",
        "Uma data fora do intervalo é ignorada."
      ],
      "limitations": "Não há um calendário de feriados por país. Um feriado conta como dia útil salvo se você o excluir.",
      "faqs": [
        {
          "question": "Como se contam os dias úteis?",
          "answer": "Contam-se de segunda a sexta. O sábado e o domingo não, salvo quando você olha o total do fim de semana."
        },
        {
          "question": "Isso inclui os fins de semana?",
          "answer": "Os dias de fim de semana aparecem à parte. Não entram na contagem de dias úteis."
        },
        {
          "question": "E se a data de fim cair no fim de semana?",
          "answer": "Uma data de fim no sábado ou no domingo soma um dia de fim de semana quando a data de fim é incluída. Não soma um dia útil."
        },
        {
          "question": "Posso excluir datas concretas?",
          "answer": "Sim. Coloque uma data por linha. Um dia útil dentro do intervalo é subtraído da contagem de dias úteis e aparece na lista."
        },
        {
          "question": "Isso inclui os feriados?",
          "answer": "Só se você os deixar dentro. A página não sabe quais datas são feriados."
        },
        {
          "question": "Esses números são enviados a um servidor?",
          "answer": "Não. As datas que você digita são contadas nesta aba. Não são enviadas a um servidor."
        },
        {
          "question": "Como um contador de dias úteis trata só os dias de trabalho?",
          "answer": "Digite as datas de início e fim e escolha se os fins de semana contam. A ferramenta omite o sábado e o domingo por padrão, como nos calendários ocidentais."
        },
        {
          "question": "Os feriados são tirados automaticamente?",
          "answer": "Só se você os indicar ou se a ferramenta tiver uma lista de feriados ativada. Uma lista vazia significa que só os fins de semana são omitidos."
        },
        {
          "question": "A data de início entra na contagem?",
          "answer": "Os modos inclusivo e exclusivo diferem. Siga a convenção do seu contrato: muitos acordos de nível de serviço definem os dias úteis com cuidado."
        },
        {
          "question": "Posso contar dias úteis para a data estimada de um envio?",
          "answer": "Sim. As empresas de transporte costumam indicar o trânsito em dias úteis. Ainda assim, fique de olho nos horários-limite de pedido no relógio."
        },
        {
          "question": "Como os fins de semana regionais mudam o resultado?",
          "answer": "Algumas regiões têm o fim de semana na sexta e no sábado. Só uma configuração personalizada capta isso; por padrão se assume sábado e domingo."
        },
        {
          "question": "E se a minha data de fim cair em um feriado?",
          "answer": "As políticas passam para o próximo dia útil ou excluem esse dia. Ajuste a ferramenta à norma escrita que você deve seguir."
        },
        {
          "question": "O RH pode usá-la para solicitações de licença?",
          "answer": "Como contagem provisória, sim. Os saldos finais de licenças seguem o manual do empregado, que pode contar dias corridos."
        },
        {
          "question": "Por que duas ferramentas de dias úteis não coincidem?",
          "answer": "Os extremos inclusivos, os calendários de feriados e os limites de data por fuso horário causam diferenças de um dia. Compare a configuração, não só os resultados."
        },
        {
          "question": "Até que data posso projetar?",
          "answer": "Até onde os campos de data permitirem. Os intervalos longos ainda precisam de listas de feriados atualizadas a cada ano."
        },
        {
          "question": "Ela conhece os feriados bancários do meu país?",
          "answer": "Não, salvo se forem configurados. Adicione à mão os feriados nacionais para prazos legais ou bancários."
        },
        {
          "question": "Posso excluir semanas de recesso da empresa?",
          "answer": "Trate essas datas como feriados na lista de exclusões para que não contem como dias úteis."
        },
        {
          "question": "Hoje é o dia zero ou o dia um?",
          "answer": "Depende de você contar os dias que faltam para um prazo ou os dias decorridos desde um início. Leia os rótulos do modo."
        },
        {
          "question": "Como os contratos devem definir os dias úteis?",
          "answer": "Especifique os dias de fim de semana, os calendários de feriados e os horários-limite. Definições ambíguas criam disputas que uma calculadora não pode resolver."
        },
        {
          "question": "As datas que eu digito são enviadas?",
          "answer": "Não. A contagem roda no navegador durante a sessão."
        }
      ]
    }
  },
  "fuel-cost-calculator": {
    "answer": "Uma calculadora de custo de combustível estima o combustível consumido e o custo da viagem a partir da distância, do consumo e do preço que você digitar. Não consulta um preço de combustível ao vivo.",
    "metaDescription": "Estime o combustível consumido e o custo de uma viagem conforme a distância, o consumo e o preço que você indicar.",
    "ui": {},
    "content": {
      "about": "Estime quanto combustível uma viagem usa e quanto custa no preço que você indicar.",
      "howTo": [
        "Escolha milhas com milhas por galão, ou quilômetros com litros por 100 km.",
        "Digite a distância, a cifra de consumo e o preço do combustível.",
        "Digite quantas vezes você faz essa viagem.",
        "Clique em Calcular."
      ],
      "examples": [
        {
          "title": "100 milhas a 25 milhas por galão",
          "body": "A viagem consome 4 galões. A 4 dólares o galão, uma viagem custa 16 dólares."
        },
        {
          "title": "100 quilômetros a 8 litros por 100 km",
          "body": "A viagem consome 8 litros."
        }
      ],
      "explanation": "No modo de milhas, os galões são a distância dividida pelas milhas por galão. No modo de quilômetros, os litros são a distância multiplicada pelos litros por 100 km, dividida por 100. O custo é o combustível vezes o preço que você indicar, e depois se multiplica pelo número de viagens.",
      "features": [
        "Milhas e galões, ou quilômetros e litros.",
        "O custo de uma viagem e o de todas as viagens.",
        "Um preço que você mesmo digita, não uma cotação ao vivo."
      ],
      "tips": [
        "Ao mudar de unidades, o consumo e o preço de exemplo são substituídos, para que as unidades vão juntas.",
        "Digite o preço que você espera pagar. A página não obtém o preço de um posto."
      ],
      "limitations": "O resultado ignora o trânsito, a carga e a diferença entre o consumo urbano e o de estrada, salvo o único número de consumo que você digitar.",
      "faqs": [
        {
          "question": "Como se calcula o custo de combustível de uma viagem?",
          "answer": "O combustível consumido é calculado a partir da distância e do consumo, e depois se multiplica pelo preço e pelo número de viagens."
        },
        {
          "question": "Qual é a diferença entre MPG e L/100 km?",
          "answer": "As milhas por galão dividem a distância pelo consumo. Os litros por 100 km multiplicam a distância pelos litros usados em cada 100 km."
        },
        {
          "question": "Isso usa o preço da gasolina de hoje?",
          "answer": "Não. Usa o preço que você mesmo digitar."
        },
        {
          "question": "Como funcionam as viagens múltiplas?",
          "answer": "O combustível e o custo de uma viagem são multiplicados pelo número de viagens."
        },
        {
          "question": "E se eu dirigir zero milhas?",
          "answer": "O combustível consumido e o custo são 0. Um valor de 0 milhas por galão é recusado porque a viagem não pode ser dividida por zero."
        },
        {
          "question": "Esses números são enviados a um servidor?",
          "answer": "Não. A distância, o consumo e o preço que você digitar são multiplicados nesta aba. Não são enviados a nenhum servidor."
        },
        {
          "question": "Como estimo o custo de gasolina de uma viagem de carro?",
          "answer": "Digite a distância, o consumo do seu veículo e o preço por galão ou por litro. A ferramenta multiplica o combustível necessário pelo preço para estimar o custo."
        },
        {
          "question": "Devo usar MPG ou L/100 km?",
          "answer": "Ajuste a unidade à sua região e ao manual do proprietário. Misturar unidades sem converter vai distorcer o custo."
        },
        {
          "question": "Como trato uma viagem de ida e volta?",
          "answer": "Duplique a distância de ida, ou digite cada trecho se o consumo for diferente. Voltar com o carro carregado pode usar um pouco mais de combustível."
        },
        {
          "question": "O MPG urbano versus o de estrada importa?",
          "answer": "Sim. Use uma cifra combinada que coincida com a sua rota, ou faça duas estimativas e pondere-as conforme as milhas em cada condição."
        },
        {
          "question": "Posso comparar dois carros na mesma viagem?",
          "answer": "Execute a calculadora uma vez por veículo, com o MPG de cada um e a mesma distância e o mesmo preço do combustível. A diferença é a sua comparação."
        },
        {
          "question": "Que preço de combustível devo digitar?",
          "answer": "Use uma média local recente ou a do posto que você espera visitar. Os preços mudam todo dia, então atualize-o antes de uma viagem longa."
        },
        {
          "question": "Como estimo o custo por milha?",
          "answer": "Divida o custo total de combustível pela distância. Essa cifra ajuda a comparar dirigir com outros meios de transporte."
        },
        {
          "question": "A marcha lenta ou o trânsito aparecem na estimativa?",
          "answer": "Os modelos simples de distância ÷ consumo não captam um tempo longo em marcha lenta. Acrescente uma margem nas cidades congestionadas."
        },
        {
          "question": "Os veículos elétricos podem usar esta ferramenta de combustível?",
          "answer": "Não para o cálculo da carga em kWh. Use um estimador de custo de um veículo elétrico com tarifas de eletricidade, em vez do preço da gasolina."
        },
        {
          "question": "Quão preciso é o MPG do fabricante?",
          "answer": "Os valores da etiqueta são testes padronizados. Na prática, muitos motoristas veem um MPG menor; use o computador de bordo quando puder."
        },
        {
          "question": "E se eu só conhecer o custo de um abastecimento anterior?",
          "answer": "Divida esse custo pelas milhas desde o último abastecimento para obter um custo real por milha, e depois ajuste-o à nova distância."
        },
        {
          "question": "Os bagageiros ou baús de teto mudam o resultado?",
          "answer": "Eles pioram o MPG na estrada. Baixe um pouco o dado de consumo se você dirigir com uma resistência extra."
        },
        {
          "question": "Posso incluir o óleo e os pneus no custo da viagem?",
          "answer": "Esta calculadora se concentra no combustível. Some à parte a manutenção e os pedágios para um orçamento completo da viagem."
        },
        {
          "question": "As distâncias das minhas viagens são enviadas?",
          "answer": "Não. A distância e o preço ficam no navegador para a estimativa."
        }
      ]
    }
  },
  "hourly-wage-calculator": {
    "answer": "Uma calculadora de salário por hora converte um valor por hora e uma jornada semanal em salário semanal, mensal e anual. Também pode converter um salário em um valor por hora. Não inclui impostos.",
    "metaDescription": "Converta um valor por hora e uma jornada semanal em salário semanal, mensal e anual, ou um salário em valor por hora.",
    "ui": {},
    "content": {
      "about": "Converta um valor por hora e uma jornada semanal em salário semanal, mensal e anual, ou parta de um salário e veja o valor por hora.",
      "howTo": [
        "Escolha valor por hora ou salário anual.",
        "Digite as horas por semana e as semanas por ano.",
        "Digite as horas extras e um multiplicador, ou deixe as horas extras em 0.",
        "Clique em Calcular."
      ],
      "examples": [
        {
          "title": "20 dólares por hora",
          "body": "40 horas por semana durante 52 semanas são 41.600 dólares ao ano, antes das horas extras."
        },
        {
          "title": "Um salário de 52.000 dólares",
          "body": "Com 40 horas e 52 semanas, o valor por hora é 25 dólares."
        }
      ],
      "explanation": "O salário anual ordinário é o valor por hora multiplicado pelas horas por semana e pelas semanas por ano. No modo salário, o valor por hora é o salário dividido por essa mesma jornada. O pagamento de horas extras é as horas extras multiplicadas pelo valor por hora, pelo multiplicador e depois pelas semanas por ano. O salário mensal é o total anual dividido por 12.",
      "features": [
        "De valor por hora para salário e de salário para valor por hora.",
        "Horas extras com um multiplicador que você escolhe.",
        "Totais semanais, mensais e anuais."
      ],
      "tips": [
        "Use 52 semanas para um ano completo.",
        "Use um multiplicador de 1,5 para a hora extra de 50%, ou 1 se as horas extras forem pagas no valor habitual."
      ],
      "limitations": "Isto é o salário bruto a partir das horas que você indicar. Não subtrai impostos, benefícios nem folgas não remuneradas.",
      "faqs": [
        {
          "question": "Como converto um salário por hora em um salário anual?",
          "answer": "Multiplique o valor por hora pelas horas por semana e pelas semanas por ano. Some as horas extras se você as digitou."
        },
        {
          "question": "Como converto um salário em um valor por hora?",
          "answer": "Divida o salário anual pelas horas por semana multiplicadas pelas semanas por ano."
        },
        {
          "question": "Como se calcula o pagamento das horas extras?",
          "answer": "As horas extras por semana são multiplicadas pelo valor por hora, pelo multiplicador e pelas semanas por ano."
        },
        {
          "question": "Quantas semanas por ano devo usar?",
          "answer": "Use 52 para um trabalho que se paga todas as semanas. Use menos semanas se algumas não forem remuneradas."
        },
        {
          "question": "Isso inclui impostos?",
          "answer": "Não. Os totais são antes de impostos e de outras deduções."
        },
        {
          "question": "Esses números são enviados a um servidor?",
          "answer": "Não. O salário, as horas e o multiplicador de horas extras ficam nesta aba. Não são enviados a um servidor."
        },
        {
          "question": "Quantas horas por semana devo pressupor para um salário?",
          "answer": "Quarenta horas é uma hipótese habitual de jornada completa nos Estados Unidos. Use as suas horas reais programadas se você trabalhar uma semana padrão diferente."
        },
        {
          "question": "Como estimo o salário anual a partir de um valor por hora?",
          "answer": "Multiplique o valor por hora × as horas por semana × as semanas por ano. Muitos planejadores usam 52 semanas; as folgas não remuneradas podem pedir menos semanas."
        },
        {
          "question": "Como se modela a hora extra de 50%?",
          "answer": "As horas extras costumam ser pagas a 1,5 vezes o valor habitual. Digite as horas extras à parte quando a ferramenta admitir esse campo."
        },
        {
          "question": "Isso mostra o salário líquido depois dos impostos?",
          "answer": "Não. Converte entre cifras por hora e de salário antes dos impostos. Use um estimador de salário líquido (holerite) para as retenções."
        },
        {
          "question": "Que valor de semanas por ano se encaixa com os professores?",
          "answer": "Os contratos acadêmicos podem pagar por menos semanas de serviço. Use as semanas que o seu contrato realmente cobre, não um 52 genérico."
        },
        {
          "question": "Posso comparar duas ofertas de trabalho com unidades diferentes?",
          "answer": "Converta as duas para anuais ou as duas para por hora, com as mesmas hipóteses de horas e semanas, e depois compare em igualdade de condições."
        },
        {
          "question": "Como as bonificações mudam a conversão?",
          "answer": "Some a bonificação esperada ao salário anual antes de dividi-lo em um equivalente por hora se você quiser um valor com tudo incluído."
        },
        {
          "question": "Os prestadores devem usar a mesma hipótese de horas?",
          "answer": "Os autônomos costumam faturar menos horas garantidas e cobrir eles mesmos os benefícios. Inflar as horas pode subestimar o valor necessário."
        },
        {
          "question": "E o dobro em feriados?",
          "answer": "Alguns locais de trabalho pagam o dobro em feriados. Modele essas horas com o multiplicador mais alto ao estimar um período de folha."
        },
        {
          "question": "Dividir o salário por 2080 é sempre correto?",
          "answer": "2080 é 40 × 52. É uma regra prática, não uma lei. Os turnos e as jornadas em tempo parcial precisam de horas sob medida."
        },
        {
          "question": "Como os intervalos de refeição não remunerados afetam a conta por hora?",
          "answer": "Se você não recebe pelo almoço, não conte essas horas como trabalhadas ao converter um salário em um valor por hora."
        },
        {
          "question": "Posso inverter uma oferta de emprego que só indica o salário?",
          "answer": "Sim: divida-o pelas horas anuais que você pressupuser para ver um valor por hora implícito e orçar."
        },
        {
          "question": "As gorjetas entram na conversão do valor-base por hora?",
          "answer": "Mantenha o salário-base e as gorjetas à parte, salvo se você quiser de forma deliberada um valor combinado de rendimentos."
        },
        {
          "question": "As cifras salariais são guardadas em um servidor?",
          "answer": "Elas ficam na sessão do navegador para a conversão."
        }
      ]
    }
  },
  "time-calculator": {
    "answer": "Uma calculadora de tempo soma ou subtrai horas e minutos e mostra o resultado em horas, minutos restantes e minutos totais.",
    "metaDescription": "Some ou subtraia horas e minutos e leia o total em horas, minutos e minutos totais. É aritmética de durações, sem relógios nem fusos horários.",
    "ui": {},
    "content": {
      "about": "Some ou subtraia um bloco de horas e minutos de outro. O resultado são horas e minutos restantes, mais o total com sinal em minutos. É aritmética de durações. Não consulta um relógio, uma data nem um fuso horário.",
      "howTo": [
        "Digite as horas e os minutos de partida. Os dois devem ser números inteiros, zero ou maiores.",
        "Digite as horas e os minutos que você quer somar ou subtrair.",
        "Escolha Somar ou Subtrair e clique em Calcular."
      ],
      "examples": [
        {
          "title": "Duas horas e meia mais 1 hora e 45 minutos",
          "body": "2 horas e 30 minutos mais 1 hora e 45 minutos são 4 horas e 15 minutos, isto é, 255 minutos."
        },
        {
          "title": "Subtrair mais que o valor de partida",
          "body": "1 hora e 0 minutos menos 1 hora e 30 minutos é menos 0 horas e 30 minutos, isto é, −30 minutos."
        }
      ],
      "explanation": "Cada lado é convertido em minutos, o segundo lado é somado ou subtraído, e o total com sinal é de novo dividido em horas e minutos restantes. É aritmética de durações. Não consulta um relógio, uma data nem um fuso horário.",
      "features": [
        "Os minutos de 60 ou mais passam para horas.",
        "Um resultado abaixo de zero é marcado com o sinal de menos e continua mostrando as horas e os minutos restantes.",
        "Minutos totais, para que você possa conferir a operação."
      ],
      "tips": [
        "Digite 90 no quadro de minutos se você não quiser convertê-lo antes para 1 hora e 30 minutos. A página passa os minutos restantes para horas.",
        "Use a calculadora de diferença de datas quando a pergunta for quantos dias há entre duas datas do calendário."
      ],
      "limitations": "As horas e os minutos devem ser números inteiros de 0 a 100.000. Um quadro vazio é recusado. Decimais e valores negativos são recusados. A página não converte fusos horários.",
      "faqs": [
        {
          "question": "A calculadora de tempo é grátis?",
          "answer": "Sim. Você pode somar ou subtrair horas e minutos aqui sem pagar nem criar uma conta."
        },
        {
          "question": "E se os minutos forem 60 ou mais?",
          "answer": "Eles entram no total e depois aparecem como horas mais um resto de 0 a 59."
        },
        {
          "question": "O resultado pode ser negativo?",
          "answer": "Sim, quando você subtrai mais que a duração de partida. A página marca esse resultado com o sinal de menos."
        },
        {
          "question": "Esses números são enviados a um servidor?",
          "answer": "Não. As horas e os minutos são calculados nesta aba do navegador. O Tools Star Hub não envia essas cifras a um servidor nem as guarda no armazenamento local."
        },
        {
          "question": "Como somo horas e minutos?",
          "answer": "Digite cada duração, escolha somar e leia o total normalizado. Os minutos de 60 ou mais passam para horas para que o resultado fique em um formato legível de horas e minutos."
        },
        {
          "question": "Como subtraio uma duração de outra?",
          "answer": "Coloque primeiro a duração maior quando você esperar um resto positivo e depois subtraia. Um resultado negativo significa que a segunda duração era mais longa que a primeira."
        },
        {
          "question": "Posso misturar horas, minutos e segundos?",
          "answer": "Use os campos que a calculadora oferece para cada unidade. Se faltar um campo, converta antes os valores para as unidades aceitas."
        },
        {
          "question": "Como converto minutos em horas?",
          "answer": "Divida o total de minutos por 60 para obter as horas inteiras e deixe o resto como minutos. A calculadora faz essa normalização quando o total passa de 59 minutos."
        },
        {
          "question": "É um relógio para fusos horários?",
          "answer": "Não. Soma e subtrai durações. Para horas de relógio entre cidades, use um conversor de fusos horários."
        },
        {
          "question": "Posso calcular a duração de um turno de trabalho?",
          "answer": "Sim, para uma duração simples quando você já conhece as horas e os minutos trabalhados. Não registra a hora de entrada nem aplica sozinha regras de intervalos."
        },
        {
          "question": "E se eu só conhecer as horas em decimal?",
          "answer": "Converta primeiro as horas decimais em minutos (multiplique a fração por 60) e depois digite horas e minutos. Exemplo: 1,5 horas é 1 hora e 30 minutos."
        },
        {
          "question": "A calculadora lida com dias?",
          "answer": "Quando o total passa de 24 horas, alguns modos mostram horas extras em vez de dias corridos. Divida em dias à mão se precisar contar dias."
        },
        {
          "question": "Por que duas ferramentas de tempo não coincidem?",
          "answer": "O arredondamento, se os segundos são conservados e se os negativos são aceitos variam conforme o produto. Iguale a precisão das unidades antes de comparar."
        },
        {
          "question": "Posso somar uma lista de tempos por volta?",
          "answer": "Some-os um após o outro, ou some-os à parte e digite as horas e os minutos combinados. Esta página não tem uma tabela de voltas."
        },
        {
          "question": "Inclui o cálculo de horas extras?",
          "answer": "Não se aplicam regras de folha de pagamento. Calcule aqui a duração bruta e depois aplique os multiplicadores de horas extras na sua planilha de folha."
        },
        {
          "question": "Quão precisos são os resultados?",
          "answer": "Os resultados seguem minutos ou segundos inteiros conforme os dados que você digitar. As frações de segundo não são o objetivo desta ferramenta simples de durações."
        },
        {
          "question": "Posso usá-la para temporizadores de cozinha?",
          "answer": "Sim, para somar blocos de preparo e cozimento. Não faz soar um alarme; copie o total em um aplicativo de temporizador se precisar de uma contagem regressiva."
        },
        {
          "question": "O que significa uma duração negativa?",
          "answer": "Que você subtraiu um intervalo mais longo de um mais curto. Troque os operandos ou tome o valor absoluto como o que falta."
        },
        {
          "question": "O horário de verão muda o cálculo de durações?",
          "answer": "Somar durações ignora os saltos do relógio civil. O horário de verão importa para os horários de relógio, não para a aritmética pura de horas e minutos."
        },
        {
          "question": "Minhas durações ficam guardadas?",
          "answer": "Elas ficam no navegador durante a sessão. Nada é enviado para completar a soma ou a subtração."
        }
      ]
    }
  },
  "average-calculator": {
    "answer": "Uma calculadora de médias acha a média, a mediana e a moda dos números que você colar. Com uma quantidade par, a mediana é a média dos dois números centrais.",
    "metaDescription": "Ache a média, a mediana e a moda de uma lista de números separados por vírgulas, espaços ou quebras de linha, com até 1000 valores.",
    "ui": {},
    "content": {
      "about": "Cole uma lista de números e obtenha a quantidade, a média, a mediana e a moda. Separe os valores com vírgulas, espaços ou quebras de linha. A lista admite até 1000 números, e os valores não são ponderados.",
      "howTo": [
        "Cole os números. Uma lista vazia é recusada.",
        "Clique em Calcular.",
        "Leia a média, o valor central e a moda, se houver."
      ],
      "examples": [
        {
          "title": "Quatro números sem repetir",
          "body": "1, 2, 3, 4 tem uma média de 2,5, uma mediana de 2,5 e nenhuma moda."
        },
        {
          "title": "Um par repetido",
          "body": "1, 2, 2, 3 tem uma média de 2, uma mediana de 2 e uma moda de 2. 1, 1, 2, 2, 3 tem uma média de 1,8, uma mediana de 2 e as modas 1 e 2."
        }
      ],
      "explanation": "A média é a soma dividida pela quantidade de números que você digitou. A mediana é o número central depois de ordenar, ou a média dos dois números centrais quando a quantidade é par. A moda é o valor que aparece com mais frequência. Se cada valor distinto aparecer uma só vez, não há moda. Um único número é a sua própria moda.",
      "features": [
        "Média arredondada para no máximo 10 casas decimais.",
        "A mediana de uma quantidade par é a média dos dois números centrais.",
        "Mais de uma moda quando vários valores empatam na maior frequência."
      ],
      "tips": [
        "O GPA usa notas em letra e créditos. Use a calculadora de GPA para isso, não esta lista de números em bruto."
      ],
      "limitations": "Até 1000 números. Um elemento que não seja um número faz com que toda a lista seja recusada. Esta página não pondera os valores.",
      "faqs": [
        {
          "question": "A calculadora de médias é grátis?",
          "answer": "Sim. Você pode achar a média, a mediana e a moda de uma lista aqui sem pagar nem criar uma conta."
        },
        {
          "question": "Qual é a mediana de uma lista par?",
          "answer": "A média dos dois números centrais depois de ordenar a lista. 1, 2, 3, 4 tem uma mediana de 2,5."
        },
        {
          "question": "Quando não há moda?",
          "answer": "Quando cada número distinto aparece o mesmo número de vezes e a lista tem mais de um número. 1, 2, 3, 4 não tem moda."
        },
        {
          "question": "Esses números são enviados a um servidor?",
          "answer": "Não. A lista é calculada nesta aba do navegador. O Tools Star Hub não envia essas cifras a um servidor nem as guarda no armazenamento local."
        },
        {
          "question": "Como calculo a média de uma lista de números?",
          "answer": "Some todos os valores e divida pela quantidade de valores que você digitou. Esse quociente é a média aritmética, que a maioria chama simplesmente de média."
        },
        {
          "question": "Qual é a diferença entre média, mediana e moda?",
          "answer": "A média é a soma dividida pela quantidade. A mediana é o valor central depois de ordenar. A moda é o valor que aparece com mais frequência."
        },
        {
          "question": "Quando devo usar a mediana em vez da média?",
          "answer": "Use a mediana quando uns poucos valores extremos subiriam ou baixariam a média, como em rendas ou preços de imóveis. O valor central é menos sensível aos valores atípicos."
        },
        {
          "question": "Posso colar números separados por vírgulas ou espaços?",
          "answer": "Sim. A calculadora aceita os separadores habituais para que você cole de uma lista de células de uma planilha ou de uma nota rápida. Um elemento que não seja um número recusa a lista."
        },
        {
          "question": "A ordem importa ao calcular uma média?",
          "answer": "Não para a média. A ordem importa para achar a mediana porque a lista é ordenada primeiro, mas a mediana final não depende de como você digitou as linhas."
        },
        {
          "question": "Como faço a média de percentuais corretamente?",
          "answer": "Se cada percentual vier de um grupo do mesmo tamanho, uma média simples serve. Se os tamanhos diferirem, pondere cada percentual pelo tamanho do seu grupo em vez de calcular a média só dos percentuais."
        },
        {
          "question": "O que acontece se eu incluir um zero na lista?",
          "answer": "O zero continua contando como valor. Ele baixa a média e pode ser a moda se for o mais frequente. Não tire os zeros salvo se fossem células vazias que você queria omitir."
        },
        {
          "question": "Esta calculadora acha uma média ponderada?",
          "answer": "Esta página se concentra na média, na mediana e na moda sem ponderar. Para notas ou pesos de uma carteira, multiplique cada valor pelo seu peso, some esses produtos e divida pelo peso total."
        },
        {
          "question": "Por que a minha média é um decimal longo?",
          "answer": "A divisão muitas vezes produz decimais periódicos. Arredonde só para exibir; conserve a precisão completa se você for usar o resultado em outro cálculo."
        },
        {
          "question": "Quantos números posso digitar de uma vez?",
          "answer": "Até 1000. As listas pequenas de turma ou de planilha funcionam bem no navegador. Os conjuntos de dados muito grandes vão melhor em uma planilha ou em um programa estatístico."
        },
        {
          "question": "A média sempre está entre o menor e o maior valor?",
          "answer": "Sim, para a média aritmética de números reais. Se o seu resultado ficar fora desse intervalo, provavelmente um separador ou um sinal foi lido errado."
        },
        {
          "question": "O que é um conjunto de dados bimodal?",
          "answer": "É um conjunto com dois valores distintos empatados como os mais frequentes. Algumas ferramentas mostram as duas modas; outras dizem que não há uma moda única."
        },
        {
          "question": "Números negativos funcionam em uma calculadora de médias?",
          "answer": "Sim. As perdas, as temperaturas e as pontuações com sinal são dados válidos. A média pode ser negativa quando os negativos dominam a soma."
        },
        {
          "question": "Como a média é usada nas decisões do dia a dia?",
          "answer": "As pessoas fazem a média de notas de provas, gastos mensais, tempos de trajeto e estatísticas esportivas para resumir uma lista em um número. Acompanhe-o do intervalo quando os valores atípicos importarem."
        },
        {
          "question": "As linhas em branco entram na média?",
          "answer": "Não. As entradas vazias não são números. Tire os espaços em branco antes de calcular para que a quantidade coincida com os valores que você realmente mediu."
        },
        {
          "question": "Posso comparar duas médias de amostras de tamanho diferente?",
          "answer": "Você pode comparar as cifras, mas a amostra menor tem mais ruído. Indique a quantidade junto de cada média para que o leitor não supervalorize um grupo minúsculo."
        }
      ]
    }
  },
  "date-difference-calculator": {
    "answer": "Uma calculadora de diferença de datas conta os dias entre duas datas e também mostra a duração no calendário. Os meses não são tratados como 30 dias fixos.",
    "metaDescription": "Conte os dias entre duas datas e veja as semanas e a duração no calendário em anos, meses e dias. Os meses não são tratados como 30 dias fixos.",
    "ui": {},
    "content": {
      "about": "Escolha uma data de início e uma de fim. Você obtém o número de dias, como ele se divide em semanas e dias restantes, e uma duração no calendário em anos, meses e dias.",
      "howTo": [
        "Escolha a data de início e a data de fim.",
        "Clique em Calcular.",
        "Leia primeiro o total de dias quando precisar de uma contagem exata.",
        "Use a linha de anos, meses e dias quando quiser uma descrição de calendário."
      ],
      "examples": [
        {
          "title": "De 1º de março a 1º de abril em um ano não bissexto",
          "body": "A contagem exata é de 31 dias, que são 4 semanas e 3 dias. A duração de calendário é de 0 anos, 1 mês e 0 dias. As duas descrições são corretas. Não são a mesma unidade."
        },
        {
          "title": "A mesma data duas vezes",
          "body": "Início e fim em 2026-09-23. O total de dias é 0. As semanas e os dias extras são 0. A duração de calendário é de 0 anos, 0 meses e 0 dias."
        }
      ],
      "explanation": "O total de dias conta as meia-noites entre as duas datas. As semanas são essa contagem dividida por 7. A linha de anos, meses e dias percorre o calendário: se o dia final for anterior no mês, toma emprestada a duração do mês anterior. Essa duração muda. Fevereiro não tem 30 dias. A cifra de mês médio divide a contagem de dias por 30,44 e é só um tamanho aproximado. Não é um segundo resultado de calendário.",
      "features": [
        "Contagem exata de dias, inclusive um resultado de 0 para o mesmo dia.",
        "Semanas mais os dias restantes.",
        "Uma duração de calendário que toma emprestados dias e meses como um calendário faz.",
        "Uma cifra à parte de mês médio, rotulada como média."
      ],
      "tips": [
        "Use o total de dias para um prazo. Use a duração de calendário quando descrever um aluguel, uma assinatura ou um período parecido com uma idade.",
        "Se a data de fim for anterior, a página continua mostrando uma duração positiva e indica que as datas estavam invertidas."
      ],
      "limitations": "Os meses do calendário não têm uma duração fixa, então «1 mês» não são sempre 30 dias. A linha de mês médio não é uma contagem exata de meses. A hora do dia é ignorada.",
      "faqs": [
        {
          "question": "E se a data de fim for anterior à de início?",
          "answer": "As contagens continuam positivas e uma nota indica que a data de fim é anterior. A duração vai da data posterior à anterior."
        },
        {
          "question": "Fevereiro muda o resultado?",
          "answer": "Sim, na duração de calendário. Um período que cruza fevereiro usa a duração real desse mês. A contagem total de dias continua exata."
        },
        {
          "question": "Meus dados são enviados a um servidor?",
          "answer": "Não. As duas datas são contadas nesta aba. Não são enviadas."
        },
        {
          "question": "Como conto os dias entre duas datas?",
          "answer": "Escolha as datas de início e fim e calcule. O total de dias é a contagem exata, e as semanas e os anos, meses e dias descrevem a mesma duração."
        },
        {
          "question": "A data de fim entra na contagem?",
          "answer": "A contagem é o número de dias desde a data de início até a de fim, então o próprio dia de início não é somado. Some 1 se precisar incluir os dois dias."
        },
        {
          "question": "Como meço o intervalo entre duas datas do calendário?",
          "answer": "Escolha as datas de início e fim e leia o total de dias junto com o detalhamento em anos, meses e dias."
        },
        {
          "question": "O total inclui tanto o primeiro dia quanto o último?",
          "answer": "Em geral, a contagem é a diferença de início a fim sem contar duas vezes o dia de início; some 1 se precisar de dias inclusivos."
        },
        {
          "question": "Como os dias bissextos mudam uma diferença que cruza fevereiro?",
          "answer": "Os anos bissextos acrescentam 29 de fevereiro. Os intervalos que cruzam 29 de fevereiro ganham um dia extra."
        },
        {
          "question": "Por que o total de dias e o detalhamento em meses podem não coincidir com uma regra de 30 dias?",
          "answer": "O total de dias é exato; os meses variam de duração, então o detalhamento em meses segue o calendário, não blocos fixos de 30 dias."
        },
        {
          "question": "A hora importa em uma diferença só de datas?",
          "answer": "O modo só de datas ignora a hora. As ferramentas de data e hora podem truncar ou arredondar de outra forma."
        },
        {
          "question": "Como excluo os fins de semana de um intervalo de datas?",
          "answer": "Use uma ferramenta de dias úteis ou subtraia os fins de semana (e os feriados, se for preciso) do total."
        },
        {
          "question": "O que acontece se eu inverter as datas de início e fim?",
          "answer": "Muitas calculadoras as trocam ou mostram uma duração negativa ou absoluta: leia o comportamento da página."
        },
        {
          "question": "Estas calculadoras tratam os anos bissextos como de 366 dias?",
          "answer": "Elas seguem o calendário, então os anos bissextos têm 366 dias."
        },
        {
          "question": "De onde vem o atalho do «mês de 30 dias»?",
          "answer": "É uma média aproximada para estimativas. As ferramentas exatas usam a duração real dos meses."
        },
        {
          "question": "Como expresso a idade de alguém em dias?",
          "answer": "Coloque a data de nascimento como início e hoje (ou outra data) como fim, e leia o total de dias."
        },
        {
          "question": "As contagens de dias de um projeto devem contar o dia de arranque como o dia um?",
          "answer": "Esclareça isso com os envolvidos. A contagem inclusiva difere de uma simples subtração de datas."
        },
        {
          "question": "Como comparo datas quando os dois extremos usam fusos horários diferentes?",
          "answer": "Use datas de calendário em UTC para os dois extremos quando os fusos diferirem, ou você poderia deslocar o dia civil."
        },
        {
          "question": "O que significa a duração de um «mês médio» no painel de resultados?",
          "answer": "É uma métrica prática que usa cerca de 30,44 dias; não é a mesma coisa que os meses do calendário."
        },
        {
          "question": "Os feriados mudam uma diferença de dias bruta?",
          "answer": "As contagens brutas de dias ignoram os feriados. Os modos de dias úteis precisam de um calendário de feriados."
        },
        {
          "question": "Que formatos de data a calculadora aceita?",
          "answer": "Use o formato que o seletor aceitar, ou o estilo ISO AAAA-MM-DD quando for permitido digitar."
        }
      ]
    }
  },
  "savings-goal-calculator": {
    "answer": "Uma calculadora de meta de poupança estima o valor periódico que você deve separar para que a poupança atual chegue a uma meta. A taxa que você indicar é uma hipótese, não uma rentabilidade prometida.",
    "metaDescription": "Estime o aporte periódico necessário para alcançar uma meta de poupança conforme o que você já tem e a taxa de juros que escolher.",
    "ui": {},
    "content": {
      "about": "Parta de uma meta de poupança e trabalhe para trás. Digite o que você tem agora, uma taxa e de quanto tempo dispõe. A página estima o aporte de cada período.",
      "howTo": [
        "Digite a meta e o valor que você já poupou.",
        "Digite uma taxa anual, ou 0 se não quiser pressupor juros.",
        "Digite o número de anos e com que frequência você acrescenta dinheiro: todo mês, a cada duas semanas, toda semana ou uma vez por ano.",
        "Clique em Calcular. As linhas de 0%, 3%, 5% e 7% são hipóteses de exemplo."
      ],
      "examples": [
        {
          "title": "10.000 em 2 anos sem juros",
          "body": "Sem nada poupado e com uma taxa de 0%, o aporte mensal é 10.000 dividido por 24."
        },
        {
          "title": "Uma meta que você já alcançou",
          "body": "Se a poupança atual já está na meta ou acima, a página pede uma meta mais alta ou um valor inicial mais baixo. Não mostra um aporte de 0 como um plano novo."
        }
      ],
      "explanation": "Com uma taxa de 0%, o aporte é a diferença dividida pelo número de períodos. Com uma taxa, a poupança atual cresce à taxa periódica e cada aporte é somado no fim do período. O pagamento é o valor que faz com que esse saldo futuro seja igual à meta. As taxas de exemplo são hipóteses, não previsões.",
      "features": [
        "Um aporte necessário, à parte da poupança atual e dos juros estimados.",
        "Períodos semanais, quinzenais, mensais e anuais.",
        "Um saldo ano a ano na taxa que você indicou."
      ],
      "tips": [
        "Use 0% quando quiser repartir a diferença em partes iguais e sem juros.",
        "A poupança atual permanece no resultado para que você veja que ela não é a mesma coisa que os aportes novos."
      ],
      "limitations": "A taxa é uma hipótese que você mesmo digita. Esta página não prevê rentabilidades de investimento, impostos nem taxas. Uma meta que você já alcançou é recusada.",
      "faqs": [
        {
          "question": "Quanto devo poupar todo mês?",
          "answer": "Escolha mensal como frequência. O resultado é o aporte que alcança a meta nos anos que você indicou, na taxa que você indicou."
        },
        {
          "question": "Como calculo uma meta de poupança?",
          "answer": "Subtraia o que você tem da meta quando a taxa é 0 e depois divida pelo número de depósitos. Com uma taxa, a página usa a fórmula do valor futuro para incluir os juros."
        },
        {
          "question": "Os juros reduzem o valor que preciso poupar?",
          "answer": "Com uma taxa pressuposta mais alta, o aporte necessário costuma ser menor porque se estima que o saldo rende juros. Essa taxa não está garantida."
        },
        {
          "question": "O que acontece se eu começar com poupança já existente?",
          "answer": "Primeiro se faz crescer a poupança atual. Você só aporta a diferença que ainda falta."
        },
        {
          "question": "Quanto tempo vou levar para alcançar a minha meta de poupança?",
          "answer": "Você indica o tempo. Depois a página resolve o aporte, em vez de resolver a data."
        },
        {
          "question": "Esses números são enviados a um servidor?",
          "answer": "Não. A meta, a taxa e a poupança atual são resolvidas nesta aba. Não são guardadas nem enviadas."
        },
        {
          "question": "Devo digitar as metas antes ou depois dos impostos?",
          "answer": "Use o dinheiro que você realmente pode passar para a poupança todo mês: em geral, valores líquidos que restam na sua mão."
        },
        {
          "question": "E se a minha renda variar de um mês para o outro?",
          "answer": "Faça a média de vários meses de transferências realistas, ou calcule à parte um valor mensal no melhor e no pior caso."
        },
        {
          "question": "Posso modelar juntos um fundo de emergência e umas férias?",
          "answer": "Trate cada meta na sua própria execução e depois some os valores mensais se você as financiar em paralelo."
        },
        {
          "question": "A inflação muda a meta que devo fixar?",
          "answer": "Para compras distantes, suba a meta pelo aumento esperado de preços; a calculadora usa a meta que você digitar."
        },
        {
          "question": "Como os rendimentos extraordinários afetam o calendário?",
          "answer": "Some um valor único à poupança inicial e calcule de novo; um depósito pode encurtar muito os meses necessários."
        },
        {
          "question": "Os pagamentos de dívida devem ir antes deste plano de poupança?",
          "answer": "A dívida de juros altos costuma merecer prioridade; use o dinheiro que restar como dado de poupança mensal."
        },
        {
          "question": "Posso usar depósitos semanais em vez de mensais?",
          "answer": "Converta os valores semanais para um equivalente mensal (cerca de ×4,33) para que o calendário se mantenha coerente."
        },
        {
          "question": "Que APY devo pressupor para uma conta de alto rendimento?",
          "answer": "Use uma taxa conservadora que você acredite poder obter, não um pico promocional que pode caducar."
        },
        {
          "question": "A ferramenta leva em conta taxas ou impostos sobre os juros?",
          "answer": "Não: os juros são uma estimativa simples de crescimento; baixe a taxa se as tarifas ou os impostos importarem."
        },
        {
          "question": "Como planejo quando a data-limite é fixa?",
          "answer": "Digite a meta e os meses disponíveis, leia o depósito mensal necessário e confira se ele é acessível."
        },
        {
          "question": "Posso incluir a contribuição da empresa na meta?",
          "answer": "Só se esse dinheiro realmente chegar ao mesmo fundo; se não, deixe essa contribuição de fora desta meta de poupança."
        },
        {
          "question": "Por que é mais seguro arredondar os meses para cima?",
          "answer": "Os meses parciais igualmente precisam de um depósito; arredondar para cima evita que você fique curto quando os calendários são irregulares."
        },
        {
          "question": "As contas das crianças devem usar os mesmos dados?",
          "answer": "Sim, para a operação: use simplesmente os valores realistas de presentes ou de mesada que você possa manter."
        },
        {
          "question": "O rendimento passado do meu fundo entra na conta?",
          "answer": "Não: a projeção só usa a taxa e os depósitos que você indicar para esta meta."
        }
      ]
    }
  },
  "paycheck-estimator": {
    "answer": "Um estimador de salário líquido subtrai do bruto os descontos antes dos impostos, as retenções e os descontos depois dos impostos que você indicar. A retenção é a sua hipótese, não um cálculo oficial de impostos.",
    "metaDescription": "Estime o salário líquido a partir do bruto e dos descontos antes dos impostos, das retenções e dos descontos depois dos impostos que você indicar.",
    "ui": {},
    "content": {
      "about": "Estime um holerite e um ano de salário a partir do bruto e dos descontos que você digitar.",
      "howTo": [
        "Digite o salário bruto de um holerite.",
        "Escolha semanal, a cada duas semanas, duas vezes por mês ou mensal.",
        "Digite os descontos antes dos impostos, a retenção como percentual ou como valor, e os descontos depois dos impostos. Os descontos em branco contam como 0.",
        "Clique em Calcular."
      ],
      "examples": [
        {
          "title": "1000 dólares com 10% de retenção",
          "body": "Sem outros descontos, a retenção é 100 dólares e o salário líquido é 900 dólares."
        },
        {
          "title": "Uma retenção em valor fixo",
          "body": "Uma retenção de 200 dólares sobre um holerite de 1000 dólares deixa 800 dólares quando os demais descontos são 0."
        }
      ],
      "explanation": "Os descontos antes dos impostos são subtraídos primeiro do salário bruto. Depois a retenção é um percentual do que resta, ou o valor que você digitou. Os descontos depois dos impostos são subtraídos depois da retenção. As cifras anuais repetem esse holerite 52, 26, 24 ou 12 vezes.",
      "features": [
        "Quatro frequências de pagamento.",
        "Retenção em percentual ou em valor.",
        "Um holerite líquido e uma estimativa anual com essa mesma frequência."
      ],
      "tips": [
        "Deixe um desconto em branco quando ele for zero.",
        "Use a retenção em percentual só para a alíquota que você quiser que esta estimativa pressuponha."
      ],
      "limitations": "A retenção é por completo o número que você indicar. Esta página não usa as tabelas do IRS nem as tabelas estaduais ou locais, e não é um cálculo oficial de impostos. Tampouco aplica o PAYE do Reino Unido, as retenções de folha da Agência Tributária do Canadá, o PAYG da Austrália nem o IRRF ou o INSS do Brasil.",
      "faqs": [
        {
          "question": "Como se estima o salário que fica na sua mão?",
          "answer": "O bruto menos os descontos antes dos impostos, menos a retenção que você indicou, menos os descontos depois dos impostos."
        },
        {
          "question": "Qual é a diferença entre os descontos antes e depois dos impostos?",
          "answer": "Os descontos antes dos impostos reduzem o valor usado para a retenção. Os descontos depois dos impostos são subtraídos depois da retenção."
        },
        {
          "question": "Como funciona o percentual de retenção?",
          "answer": "O percentual se aplica ao salário bruto depois dos descontos antes dos impostos. Um 0% não retém nada. Um 100% retém todo esse valor restante."
        },
        {
          "question": "O que significam as frequências de pagamento?",
          "answer": "Semanal usa 52 holerites, a cada duas semanas usa 26, duas vezes por mês usa 24 e mensal usa 12."
        },
        {
          "question": "Isto é um cálculo oficial de impostos?",
          "answer": "Não. Usa só o percentual ou o valor de retenção que você digitar. Não aplica as tabelas do IRS, o PAYE do Reino Unido, as retenções da Agência Tributária do Canadá, o PAYG da Austrália nem o IRRF ou o INSS do Brasil."
        },
        {
          "question": "Esses números são enviados a um servidor?",
          "answer": "Não. O salário bruto e a retenção que você digitou são estimados aqui. Não são enviados a nenhum servidor."
        },
        {
          "question": "Como estimo o que me resta na mão a partir de um salário?",
          "answer": "Digite o salário bruto, a frequência de pagamento e as hipóteses de retenção, e depois leia o líquido estimado."
        },
        {
          "question": "Devo digitar o salário anual ou o bruto de cada holerite?",
          "answer": "Siga os rótulos dos campos: as cifras anuais são divididas conforme a frequência; o bruto de cada período é usado tal como você o digita."
        },
        {
          "question": "Como os descontos antes dos impostos mudam a estimativa?",
          "answer": "Eles reduzem o salário tributável antes da retenção, o que pode subir o que resta na sua mão em relação ao mesmo corte depois dos impostos."
        },
        {
          "question": "O que entra nos descontos depois dos impostos?",
          "answer": "Itens que são descontados depois do imposto, como certos benefícios ou penhoras, que baixam o líquido sem mudar o salário tributável da mesma forma."
        },
        {
          "question": "Posso modelar um pagamento quinzenal frente a um mensal?",
          "answer": "Sim: mude a frequência para que o mesmo salário anual produza a estimativa por holerite que corresponda."
        },
        {
          "question": "Por que isto não substitui um programa de folha de pagamento?",
          "answer": "Usa entradas simplificadas de percentual de retenção, não as tabelas completas do IRS, as regras estaduais nem a configuração do empregador."
        },
        {
          "question": "Como aproximo o efeito de um aumento no salário líquido?",
          "answer": "Atualize o salário bruto e compare o novo líquido; ajuste a retenção se o seu W-4 real mudasse. No Brasil, ajuste a hipótese de IRRF se a sua faixa mudar."
        },
        {
          "question": "E se eu tiver vários trabalhos?",
          "answer": "Estime cada holerite à parte ou combine o bruto com cuidado; é fácil modelar mal umas retenções que se sobrepõem."
        },
        {
          "question": "As bonificações precisam de um percentual de retenção diferente?",
          "answer": "Muitas vezes sim em um holerite real; suba o percentual de forma temporária se quiser uma estimativa prudente da bonificação."
        },
        {
          "question": "Posso incluir o valor dos benefícios da empresa?",
          "answer": "Concentre-se aqui no salário em dinheiro; os benefícios não monetários costumam ficar de fora de uma estimativa simples do que resta na sua mão."
        },
        {
          "question": "Quão precisas são as conjecturas do imposto estadual?",
          "answer": "Só tanto quanto o percentual que você indicar: consulte a sua situação ou use estimadores oficiais para a declaração."
        },
        {
          "question": "Uma mudança de situação fiscal vai aparecer aqui?",
          "answer": "Só de forma indireta, por meio do percentual de retenção que você escolher; a ferramenta não é uma folha completa do W-4 nem uma simulação oficial de IRRF."
        },
        {
          "question": "Os trabalhadores por hora podem usá-la?",
          "answer": "Converta as horas previstas pelo valor da hora no bruto do período e depois execute a estimativa."
        },
        {
          "question": "Os resultados ficam guardados quando eu saio?",
          "answer": "Trate as cifras como próprias da sessão; copie o que precisar nas suas próprias notas."
        }
      ]
    }
  },
  "rent-vs-buy-calculator": {
    "answer": "Uma calculadora de alugar ou comprar estima o aluguel pago e o custo em dinheiro e o patrimônio de comprar durante os anos que você escolher. O crescimento do aluguel e a mudança do valor do imóvel são hipóteses, não uma recomendação.",
    "metaDescription": "Compare o aluguel estimado com o custo estimado em dinheiro e o patrimônio de comprar durante o período que você escolher.",
    "ui": {},
    "content": {
      "about": "Estime o aluguel pago ao longo de vários anos, ao lado do dinheiro que você pagaria ao comprar, do financiamento restante e do patrimônio conforme a mudança de valor do imóvel que você indicar.",
      "howTo": [
        "Digite o aluguel mensal e uma mudança anual do aluguel. Use 0 se o aluguel se mantiver igual.",
        "Digite o preço do imóvel, a entrada, a taxa e o prazo do financiamento.",
        "Digite o IPTU, o seguro e a manutenção anuais, e a taxa mensal de condomínio. Em branco significa 0.",
        "Digite uma mudança do valor do imóvel e quantos anos comparar, e depois clique em Calcular."
      ],
      "examples": [
        {
          "title": "Pagar tudo à vista",
          "body": "Uma entrada igual ao preço não tem parcela de financiamento. O patrimônio segue a mudança de valor do imóvel que você indicar."
        },
        {
          "title": "Uma comparação mais longa que o financiamento",
          "body": "Quando termina o prazo do financiamento, cessam o principal e os juros. O IPTU, o seguro, o condomínio e a manutenção continuam."
        }
      ],
      "explanation": "Cada ano de aluguel é o ano anterior multiplicado por um mais o percentual de mudança do aluguel. A parcela do financiamento usa a amortização mensal padrão. O dinheiro de comprar é a entrada, o principal e os juros ao longo da comparação, e as despesas de moradia que você digitou. O patrimônio é o valor estimado do imóvel menos o saldo restante. O custo líquido de comprar é o dinheiro menos o patrimônio. A diferença é o custo do aluguel menos esse custo líquido de comprar. Nenhum resultado é rotulado como a melhor opção.",
      "features": [
        "Um aluguel que pode subir ou descer cada ano.",
        "Uma parcela de financiamento com a mesma operação de amortização que a calculadora de financiamento imobiliário.",
        "O custo em dinheiro, o saldo restante e o patrimônio, mostrados à parte."
      ],
      "tips": [
        "Use 0 na mudança do aluguel e na mudança do valor do imóvel quando quiser uma comparação plana.",
        "A taxa é um exemplo que você mesmo digita, não uma oferta de financiamento ao vivo."
      ],
      "limitations": "O crescimento do aluguel e a mudança do valor do imóvel são hipóteses, não previsões. A página não inclui os custos de venda, os reparos além do valor de manutenção nem os impostos de uma venda.",
      "faqs": [
        {
          "question": "Como ela compara alugar e comprar?",
          "answer": "Soma o aluguel ao longo dos anos que você indicar e soma o dinheiro de comprar; depois subtrai o patrimônio estimado desse dinheiro."
        },
        {
          "question": "A calculadora recomenda comprar ou alugar?",
          "answer": "Não. Mostra os dois custos estimados e a diferença. Não aponta um como melhor."
        },
        {
          "question": "O que acontece quando a comparação é mais longa que o financiamento?",
          "answer": "O principal e os juros cessam quando termina o prazo. Os demais custos anuais e mensais que você indicou continuam."
        },
        {
          "question": "Como se estima o patrimônio do imóvel?",
          "answer": "O preço do imóvel é modificado com a sua hipótese anual de valor e depois se subtrai o saldo restante do financiamento."
        },
        {
          "question": "O crescimento do aluguel e os preços dos imóveis são previsões?",
          "answer": "Não. Os dois são taxas que você digita para esta estimativa."
        },
        {
          "question": "Esses números são enviados a um servidor?",
          "answer": "Não. O aluguel, o preço e as taxas que você pressupõe são comparados nesta aba. Não são enviados a um servidor."
        },
        {
          "question": "Que dados importam mais em uma comparação de alugar ou comprar?",
          "answer": "O preço do imóvel, a entrada, a taxa, o prazo, o aluguel e quanto tempo você espera ficar costumam mover mais o resultado."
        },
        {
          "question": "Como devo tratar os custos de escritura e de fechamento?",
          "answer": "Inclua-os nos custos de comprar para que os primeiros anos não fiquem subestimados em relação ao aluguel."
        },
        {
          "question": "A ferramenta pressupõe que eu invisto a entrada se eu alugar?",
          "answer": "Muitas comparações creditam uma rentabilidade de oportunidade do dinheiro que não fica atado a um imóvel: leia as hipóteses da página."
        },
        {
          "question": "Como o IPTU afeta o lado de comprar?",
          "answer": "Um IPTU mais alto sobe o custo de ser proprietário cada ano e pode inclinar as estadias mais longas para o aluguel se os preços se mantiverem planos."
        },
        {
          "question": "Devo incluir as taxas de condomínio?",
          "answer": "Sim, quando você as pagaria: some-as aos demais custos de ser proprietário para uma comparação justa com o aluguel."
        },
        {
          "question": "O que significa aqui o ano de equilíbrio?",
          "answer": "É a duração da estadia em que o custo acumulado de comprar cruza o de alugar, segundo as suas hipóteses: não é uma promessa."
        },
        {
          "question": "Como modelo um aluguel que sobe?",
          "answer": "Digite uma taxa de crescimento do aluguel se você a tiver, para que os anos posteriores reflitam os aumentos previsíveis."
        },
        {
          "question": "A manutenção pode ser zero ao comprar?",
          "answer": "Não é realista na maioria dos imóveis; inclua um percentual anual de manutenção ou um valor."
        },
        {
          "question": "E se eu planejar vender antes de o financiamento terminar?",
          "answer": "Encurte o horizonte de comparação e inclua os custos de venda para não inflar os ganhos de patrimônio."
        },
        {
          "question": "Quão sensível é o resultado às taxas de juros?",
          "answer": "Umas mudanças pequenas de taxa podem deslocar muito as parcelas: teste uma taxa mais alta e uma mais baixa para ver a margem."
        },
        {
          "question": "A calculadora inclui as deduções fiscais pelos juros do financiamento imobiliário?",
          "answer": "Só se essa opção estiver presente; muitos modelos simples ignoram os efeitos fiscais das deduções detalhadas."
        },
        {
          "question": "Como devem usar o resultado quem compra pela primeira vez?",
          "answer": "Como um esboço de planejamento: confirme as cifras da pré-aprovação e os custos locais antes de decidir."
        },
        {
          "question": "Posso comparar um apartamento em condomínio com o aluguel de uma unidade semelhante?",
          "answer": "Sim: use o preço e as taxas do condomínio diante do aluguel de um tipo de unidade comparável."
        },
        {
          "question": "Por que comprar pode parecer melhor no papel, mas parecer pior todo mês?",
          "answer": "O fluxo de caixa não é a mesma coisa que o patrimônio no longo prazo; revise tanto o conforto da parcela quanto o resultado do horizonte."
        }
      ]
    }
  },
  "compound-interest-calculator": {
    "answer": "Uma calculadora de juros compostos mostra como um capital inicial pode crescer quando os juros são somados ao saldo. É uma fórmula, não uma rentabilidade prometida.",
    "metaDescription": "Veja como um capital inicial cresce com juros compostos e aportes mensais opcionais, ao lado de uma comparação com os juros simples.",
    "ui": {},
    "content": {
      "about": "Digite um capital inicial, uma taxa anual, um prazo e com que frequência os juros são capitalizados. Você também pode acrescentar um aporte mensal. A página mostra o saldo final, os juros e uma comparação com os juros simples.",
      "howTo": [
        "Digite o capital inicial e a taxa anual. O exemplo começa em 10.000 e 5%.",
        "Escolha anos ou meses e, em seguida, capitalização anual, semestral, trimestral, mensal ou diária.",
        "Deixe o aporte mensal em 0, ou digite um valor que você acrescente todo mês.",
        "Clique em Calcular. Redefinir recupera os valores de exemplo."
      ],
      "examples": [
        {
          "title": "10.000 a 5% durante 10 anos, com capitalização mensal",
          "body": "Sem aporte mensal, o saldo final é o capital inicial crescido à taxa mensal. A linha de juros é o saldo final menos 10.000."
        },
        {
          "title": "Os mesmos dados mais 100 por mês",
          "body": "O resultado divide o saldo final no capital inicial, nos aportes e nos juros. Os aportes são somados no fim de cada mês."
        }
      ],
      "explanation": "Sem aportes, o valor final é P multiplicado por (1 + r/n) elevado a n vezes t. P é o capital inicial, r é a taxa anual em decimal, n é o número de períodos de capitalização em um ano e t é o tempo em anos. Os aportes mensais são somados depois do passo de capitalização daquele mês. Os juros simples sobre o mesmo capital inicial são P vezes r vezes t, sem capitalização. Nenhum resultado é uma rentabilidade de investimento prometida.",
      "features": [
        "Crescimento só do capital e crescimento com aportes mensais, mostrados à parte.",
        "Um saldo ano a ano.",
        "Um resultado de juros simples sobre o mesmo capital inicial."
      ],
      "tips": [
        "Use 0 no aporte quando você só quiser ver como o capital inicial cresce.",
        "A capitalização diária usa 365 períodos. Continua sendo uma fórmula, não uma previsão de mercado."
      ],
      "limitations": "A calculadora não inclui impostos, taxas nem uma mudança de taxa. Um prazo de zero deixa o saldo no capital inicial. Os resultados que transbordariam são recusados em vez de serem mostrados como um número infinito.",
      "faqs": [
        {
          "question": "O que são juros compostos?",
          "answer": "São os juros que se somam ao saldo e depois também rendem juros. Uma frequência de capitalização mais alta aplica esse passo com mais frequência."
        },
        {
          "question": "Como se calculam os juros compostos?",
          "answer": "A página usa A = P(1 + r/n)^(nt) quando não há aporte. Com um aporte mensal, ela faz crescer o saldo período a período e soma o aporte no fim de cada mês."
        },
        {
          "question": "Como funciona a capitalização mensal?",
          "answer": "A taxa anual é dividida por 12. Essa taxa mensal se aplica ao saldo todo mês."
        },
        {
          "question": "Esses números são enviados a um servidor?",
          "answer": "Não. O saldo, a taxa e o aporte são capitalizados nesta aba. Essas cifras não são enviadas a um servidor."
        },
        {
          "question": "De que dados preciso para uma estimativa de juros compostos?",
          "answer": "Em geral você precisa de um saldo inicial, uma taxa anual, uma frequência de capitalização, um prazo e, de forma opcional, aportes periódicos. A calculadora capitaliza o saldo em cada período que você escolher."
        },
        {
          "question": "Como o rendimento percentual anual (APY) se relaciona com a taxa indicada?",
          "answer": "O APY reflete a capitalização dentro de um ano, então pode ser maior que a taxa anual nominal quando os juros são somados mais de uma vez por ano. Compare os APY quando as ofertas usarem calendários de capitalização diferentes."
        },
        {
          "question": "Devo digitar a taxa como 5 ou como 0,05?",
          "answer": "A maioria das calculadoras para consumidores espera um percentual, como 5 para cinco por cento. Se um campo pedir uma taxa em decimal, ele vai indicar; digitá-la no formato incorreto vai distorcer todos os períodos."
        },
        {
          "question": "Qual é a diferença entre o saldo inicial e o aporte?",
          "answer": "O saldo inicial é o dinheiro que já está investido. Os aportes são valores que você acrescenta segundo um calendário. Os dois podem render juros uma vez que estejam na conta, conforme as regras de momento."
        },
        {
          "question": "Uma capitalização mais frequente sempre cresce mais rápido?",
          "answer": "Sim, com a mesma taxa nominal, uma capitalização mais frequente cresce um pouco mais rápido, mas a diferença entre diária e contínua costuma ser pequena. A taxa e o tempo continuam dominando o resultado."
        },
        {
          "question": "Posso modelar retiradas de dinheiro com esta calculadora?",
          "answer": "Muitas calculadoras de crescimento pressupõem só entradas. Para retiradas, use uma ferramenta de empréstimos ou de saque de aposentadoria, ou digite aportes negativos só se a página o admitir de forma explícita."
        },
        {
          "question": "Por que dobrar a taxa não dobra exatamente o saldo final?",
          "answer": "Os juros rendem juros, então o crescimento é exponencial em relação à taxa e ao tempo, não uma linha reta. As tarifas, o momento dos aportes e a frequência de capitalização também mudam a trajetória."
        },
        {
          "question": "Quanto tempo o dinheiro leva para dobrar com juros compostos?",
          "answer": "Uma regra aproximada dos 72 divide 72 pela taxa percentual anual para estimar o tempo de duplicação. A linha do tempo da calculadora é mais precisa quando há aportes ou taxas pouco habituais."
        },
        {
          "question": "A projeção inclui impostos e tarifas?",
          "answer": "Os estimadores on-line costumam mostrar o crescimento bruto, antes de impostos, tarifas da conta ou penalidades por retirada antecipada. Subtraia-os à parte quando precisar de uma estimativa líquida."
        },
        {
          "question": "Que frequência de capitalização escolho para uma conta poupança?",
          "answer": "Siga o calendário que o banco indicar: diário, mensal ou trimestral. Se você não tiver certeza, o mensal é um termo médio habitual para um planejamento aproximado; depois confirme na informação da conta."
        },
        {
          "question": "Os juros compostos podem ir contra mim em uma dívida?",
          "answer": "Sim. Os cartões de crédito e alguns empréstimos somam juros aos saldos em aberto, então a dívida pode crescer igual a uma poupança. Pagar mais que o mínimo reduz o saldo que é capitalizado."
        },
        {
          "question": "Por que duas calculadoras discordam um pouco com os mesmos dados?",
          "answer": "Elas podem arredondar de forma diferente, aplicar os aportes no início ou no fim do período, ou tratar de outra forma o último período parcial. Leia as hipóteses de cada ferramenta sob o resultado."
        },
        {
          "question": "É seguro digitar uma rentabilidade passada do mercado como taxa?",
          "answer": "Não. As médias históricas não são uma garantia. Para planejar, teste várias taxas conservadoras e trate o gráfico como um cenário, não como uma promessa."
        },
        {
          "question": "Como incluo uma contribuição da empresa na estimativa?",
          "answer": "Some essa contribuição ao seu valor de aporte nos períodos em que ela se aplicar, ou aumente o saldo inicial se for uma entrada única. Tenha presentes as regras dessa contribuição para não inflá-la."
        },
        {
          "question": "A inflação muda o resultado da calculadora?",
          "answer": "O saldo em bruto costuma estar nas unidades dos aportes de hoje, não em poder de compra ajustado pela inflação. Para o crescimento real, subtraia uma hipótese de inflação depois de ver o total nominal."
        },
        {
          "question": "Quando os juros simples são melhores que os juros compostos?",
          "answer": "Algumas notas promissórias de curto prazo e exemplos de aula pagam só juros simples. Se os juros nunca se somam ao saldo durante o prazo, use uma fórmula de juros simples."
        }
      ]
    }
  },
  "loan-calculator": {
    "answer": "Uma calculadora de empréstimos estima a parcela mensal e o juro total de um empréstimo parcelado a taxa fixa a partir do valor, da taxa e do prazo que você indicar.",
    "metaDescription": "Estime a parcela mensal, os juros e o cronograma de amortização de um empréstimo a taxa fixa, inclusive um empréstimo pessoal.",
    "ui": {},
    "content": {
      "about": "Estime a parcela mensal de um empréstimo parcelado a taxa fixa, inclusive um empréstimo pessoal. Digite o valor, a taxa anual, o prazo e, de forma opcional, uma tarifa que não entra no financiamento. Você pode acrescentar pagamentos extras, ver o cronograma de amortização e baixá-lo em CSV.",
      "howTo": [
        "Digite o valor do empréstimo e a taxa de juros anual.",
        "Digite o prazo em anos ou em meses. O exemplo é 20.000 a 7% durante 5 anos.",
        "Digite uma tarifa se quiser incluí-la no custo total. Uma tarifa de 0 deixa a parcela igual.",
        "Os pagamentos extras mensais ou únicos são opcionais e, nesta estimativa, se aplicam ao principal.",
        "Clique em Calcular para ver a parcela, os juros, o cronograma de amortização e o download em CSV."
      ],
      "examples": [
        {
          "title": "20.000 a 7% durante 5 anos",
          "body": "A parcela é o valor que amortiza o empréstimo em 60 meses nessa taxa. O juro total é a soma das parcelas menos 20.000."
        },
        {
          "title": "Um empréstimo sem juros",
          "body": "A parcela é o valor do empréstimo dividido pelo número de meses. O juro total é 0."
        }
      ],
      "explanation": "A parcela mensal é P multiplicado por r(1+r)^n, dividido por (1+r)^n menos 1. P é o valor emprestado, r é a taxa anual dividida por 12 e n é o número de meses. Com uma taxa de 0%, a parcela é P dividido por n. Um prazo mais longo costuma baixar a parcela e subir o juro total. A taxa de juros daqui é a que se usa nessa fórmula. A APR (e, no Brasil, o CET) pode incluir tarifas, então uma tarifa que você digitar nesta página se soma ao custo total e não se converte em uma APR.",
      "features": [
        "Uma parcela fixa padrão, inclusive um empréstimo sem juros.",
        "Principal, juros, tarifa e custo total, mostrados como valores separados.",
        "Um cronograma de amortização anual e mensal, com download em CSV."
      ],
      "tips": [
        "Compare dois prazos calculando duas vezes. Um prazo mais curto costuma custar menos juros e ter uma parcela mais alta.",
        "Esta página pode responder a uma pergunta sobre um empréstimo pessoal. Não precisa de um URL à parte de empréstimo pessoal."
      ],
      "limitations": "O resultado é uma estimativa a partir das cifras que você indicar. Não é uma oferta de um credor e não inclui uma taxa variável nem um período de carência. A tarifa não se soma ao valor que rende juros. A fórmula usa capitalização mensal e não aplica as normas de crédito ao consumo do Reino Unido, do Canadá ou da Austrália, nem o CET brasileiro.",
      "faqs": [
        {
          "question": "Como se calcula a parcela de um empréstimo?",
          "answer": "Com uma taxa fixa maior que 0, a página usa a fórmula padrão de amortização e arredonda a parcela para centavos. A 0%, divide o valor pelo número de meses."
        },
        {
          "question": "Como o prazo afeta os juros?",
          "answer": "Mais meses costumam significar uma parcela menor e mais juros no total, porque o saldo permanece em aberto durante mais tempo."
        },
        {
          "question": "Qual é a diferença entre a taxa de juros e a APR?",
          "answer": "A taxa do formulário é a taxa anual que se usa para calcular a parcela. A APR também pode incluir tarifas. Esta página soma uma tarifa opcional ao custo total e não rotula esse total como APR nem como CET."
        },
        {
          "question": "Esses números são enviados a um servidor?",
          "answer": "Não. A parcela e os juros são calculados aqui a partir dos números que você digita. Não são enviados a nenhum servidor."
        },
        {
          "question": "De que dados uma calculadora de parcelas de empréstimo precisa?",
          "answer": "O principal, a taxa de juros anual e a duração do prazo (em anos ou em meses) são os campos principais. Esta calculadora também admite uma tarifa inicial opcional, que só se soma ao custo total, e pagamentos extras mensais ou únicos opcionais que, nesta estimativa, se aplicam ao principal."
        },
        {
          "question": "Como um prazo mais longo muda a minha parcela mensal?",
          "answer": "Repartir o mesmo principal em mais meses baixa a parcela, mas costuma subir o juro total. Compare a parcela e os juros ao longo de toda a vida do empréstimo antes de escolher."
        },
        {
          "question": "O que é a amortização, em palavras simples?",
          "answer": "É o cronograma que divide cada parcela em juros e principal. A parte de juros no começo depende da taxa e do prazo, e é mais alta com taxas mais altas e prazos mais longos; nem sempre é a maior parte da parcela. Conforme o saldo baixa, as parcelas posteriores destinam mais ao principal."
        },
        {
          "question": "Esta calculadora inclui impostos e seguros?",
          "answer": "A maioria das calculadoras simples de empréstimos mostra só principal e juros. Em um financiamento imobiliário costuma ser preciso estimar à parte o IPTU e o seguro para obter uma cifra completa de moradia (PITI)."
        },
        {
          "question": "Como os pagamentos extras afetam a quitação?",
          "answer": "Um principal extra encurta o prazo e reduz os juros se o credor o aplicar ao principal. Você pode indicar um pagamento mensal extra e um pagamento único opcional; o cronograma, os totais e o CSV refletem então a quitação mais rápida. Um credor pode aplicá-los de outra forma, então confirme que o seu contrato não tenha uma penalidade por amortização antecipada."
        },
        {
          "question": "Qual é a diferença entre uma taxa fixa e uma variável?",
          "answer": "As taxas fixas se mantêm iguais durante o prazo. As taxas variáveis podem se mover com um índice, então a estimativa daqui é só uma foto da taxa de hoje."
        },
        {
          "question": "Devo digitar a APR ou a taxa de juros nominal?",
          "answer": "Use a taxa que o rótulo da ferramenta pedir. A APR incorpora algumas tarifas para comparar ofertas; a fórmula de amortização costuma usar a taxa do contrato."
        },
        {
          "question": "Posso modelar um empréstimo sem juros?",
          "answer": "Sim, quando o campo da taxa admite 0. A parcela é então o principal dividido pelo número de meses, à parte de qualquer tarifa separada."
        },
        {
          "question": "Por que os juros do primeiro mês parecem grandes?",
          "answer": "Os juros são cobrados sobre todo o saldo inicial. Conforme o principal baixa, a parte de juros de cada parcela fixa se reduz."
        },
        {
          "question": "Quão precisa é uma estimativa de empréstimo on-line?",
          "answer": "É uma cifra de planejamento, não uma oferta de um credor. As tarifas de originação, o preço conforme o crédito e as contas de depósito (escrow) podem mudar o que você realmente pague. A fórmula usa capitalização mensal e não é um motor específico do crédito do Reino Unido, do Canadá, da Austrália nem do CET brasileiro."
        },
        {
          "question": "Posso usá-la para um financiamento de carro e para um empréstimo pessoal?",
          "answer": "Sim, para empréstimos amortizáveis padrão. Os extras da concessionária, as parcelas-balão ou os períodos de só juros precisam de outro modelo."
        },
        {
          "question": "O que acontece se eu arredondar a parcela para cima?",
          "answer": "Pagar uns poucos a mais todo mês acelera a redução do principal. Esta calculadora não pode mostrar a nova data de quitação porque não admite uma parcela personalizada; use as cifras de quitação do seu credor ou um cronograma feito com o valor mais alto."
        },
        {
          "question": "Um calendário de pagamentos quinzenais muda a conta?",
          "answer": "Os planos quinzenais podem criar o equivalente a treze parcelas «mensais» por ano. Esta calculadora só modela parcelas mensais, então não mostra a economia quinzenal. Confirme com o seu credor como esses pagamentos são aplicados."
        },
        {
          "question": "Como as tarifas do empréstimo mudam a parcela mensal?",
          "answer": "Nesta calculadora, a tarifa opcional não entra no financiamento: sobe o custo total, mas deixa a parcela mensal igual. Se o seu credor incorporar uma tarifa ao empréstimo, some-a ao valor do empréstimo e a parcela vai subir."
        },
        {
          "question": "Uma parcela mais baixa é sempre melhor?",
          "answer": "Não, se ela vier de um prazo muito mais longo com bem mais juros. Equilibre o conforto do fluxo de caixa com o custo total."
        },
        {
          "question": "Quando devo falar com um credor em vez de usar uma calculadora?",
          "answer": "Quando entram temas de crédito, avalistas, renda variável ou programas especiais. As regras de análise de crédito pesam mais que as fórmulas genéricas."
        }
      ]
    }
  },
  "mortgage-calculator": {
    "answer": "Uma calculadora de financiamento imobiliário estima principal e juros a partir do preço do imóvel, da entrada, da taxa e do prazo, e pode incluir despesas de moradia e pagamentos extras que você indicar.",
    "metaDescription": "Estime principal e juros, despesas de moradia opcionais, uma comparação a 15 e 30 anos e o efeito de pagamentos adicionais na quitação.",
    "ui": {},
    "content": {
      "about": "Estime a parcela de um financiamento imobiliário a taxa fixa a partir do preço do imóvel, de uma entrada, de uma taxa e de um prazo. O IPTU, o seguro, a taxa de condomínio (HOA) e o seguro hipotecário privado (PMI) ficam em 0 até você os digitar. Os pagamentos extras, um cronograma de amortização para baixar e uma comparação a 15 e 30 anos estão nesta mesma página.",
      "howTo": [
        "Digite o preço do imóvel, a entrada como percentual ou como valor, a taxa e o prazo.",
        "Use 15 anos ou 30 anos, ou digite outro número inteiro de anos entre 1 e 50.",
        "Deixe em branco o IPTU, o seguro, o condomínio e o PMI se você só quiser principal e juros.",
        "Adicione um pagamento mensal extra ou um pagamento único se quiser uma estimativa de quitação.",
        "Clique em Calcular para ver a parcela, o cronograma de amortização e o download em CSV. A taxa do exemplo é só um exemplo, não uma taxa real de um credor."
      ],
      "examples": [
        {
          "title": "Um imóvel de 400.000 com 20% de entrada",
          "body": "O valor financiado é 320.000. A parcela principal é só principal e juros até você digitar IPTU, seguro, condomínio ou PMI."
        },
        {
          "title": "200 extras por mês",
          "body": "A seção de quitação mostra um prazo mais curto e a diferença de juros. É uma estimativa de aplicar esse valor extra ao principal."
        }
      ],
      "explanation": "O valor financiado é o preço do imóvel menos a entrada. Principal e juros usam a mesma fórmula a taxa fixa que a calculadora de empréstimos. Com juros de 0%, a parcela é o valor financiado dividido pelo número de meses. O IPTU e o seguro anuais são divididos por 12. O condomínio e o PMI são valores mensais que você mesmo digita. As linhas a 15 e 30 anos usam o mesmo preço, a mesma entrada e a mesma taxa para que você veja a parcela e o juro total um ao lado do outro.",
      "features": [
        "Principal e juros, mostrados à parte do custo mensal completo da moradia.",
        "Um cronograma de amortização anual e mensal, com download em CSV.",
        "Uma estimativa de pagamentos extras, com os meses e os juros economizados.",
        "Uma comparação a 15 e 30 anos com o mesmo preço, a mesma entrada e a mesma taxa."
      ],
      "tips": [
        "Uma entrada de 100% deixa um valor financiado de 0 e uma parcela de principal e juros de 0.",
        "O PMI é o valor mensal que você digitar. Esta página não decide se um financiamento tem PMI."
      ],
      "limitations": "As estimativas têm um fim educativo e se baseiam nas informações que você indicar. As condições reais do financiamento, as tarifas do credor, os impostos, o seguro e outros custos podem diferir. Os pagamentos extras são uma estimativa matemática. Um credor pode aplicá-los em outro calendário. Isto não é uma oferta. A fórmula da parcela usa capitalização mensal no estilo dos EUA. Não acrescenta o stamp duty do Reino Unido, a capitalização semestral canadense, o seguro hipotecário do credor (LMI) da Austrália, o ITBI nem o CET brasileiro.",
      "faqs": [
        {
          "question": "Como se calcula a parcela de um financiamento imobiliário?",
          "answer": "A página subtrai a entrada do preço do imóvel e depois aplica a fórmula de parcela a taxa fixa a esse valor financiado e a esse prazo."
        },
        {
          "question": "O que inclui uma parcela mensal de financiamento imobiliário?",
          "answer": "A linha de principal e juros é só o financiamento. O IPTU, o seguro, o PMI e o condomínio se somam unicamente quando você os digita."
        },
        {
          "question": "Como a entrada afeta um financiamento imobiliário?",
          "answer": "Uma entrada maior baixa o valor financiado, o que baixa principal e juros. A entrada não pode ser maior que o preço do imóvel."
        },
        {
          "question": "Como os pagamentos extras de financiamento reduzem os juros?",
          "answer": "Nesta estimativa, um pagamento mensal extra e um pagamento único opcional reduzem o saldo mais rápido. Depois a página mostra a quitação mais curta, os juros que não foram cobrados, um cronograma de amortização atualizado e um download em CSV."
        },
        {
          "question": "Esses números são enviados a um servidor?",
          "answer": "Não. O preço do imóvel, a entrada e a taxa ficam nesta aba enquanto a parcela é estimada. Não são enviados a um servidor."
        },
        {
          "question": "Como estimo uma parcela mensal de financiamento imobiliário?",
          "answer": "Digite o valor financiado depois da entrada, a taxa de juros e o prazo em anos. A calculadora aplica a amortização padrão para estimar principal e juros de cada mês."
        },
        {
          "question": "Esta estimativa de financiamento inclui impostos e seguro?",
          "answer": "Muitas calculadoras simples mostram só principal e juros. Acrescente à parte o IPTU, o seguro e as taxas de condomínio se precisar de um orçamento completo de moradia."
        },
        {
          "question": "Como uma entrada maior muda a parcela?",
          "answer": "Ela baixa o valor financiado, o que baixa principal e juros. Também pode evitar o seguro hipotecário privado quando você alcança o limiar de patrimônio que o credor exigir."
        },
        {
          "question": "Que prazo devo modelar primeiro?",
          "answer": "Os financiamentos fixos a 30 anos são um ponto de partida habitual nos Estados Unidos; os prazos a 15 anos sobem a parcela mensal, mas cortam o juro total. Compare os dois com as mesmas hipóteses de taxa."
        },
        {
          "question": "Em que os pagamentos extras de principal ajudam?",
          "answer": "Os valores extras reduzem o saldo antes, então se acumula menos juro ao longo da vida do financiamento. Confirme que o seu credor aplique as amortizações antecipadas ao principal."
        },
        {
          "question": "A APR é a mesma taxa de juros que eu devo digitar?",
          "answer": "A APR inclui certas tarifas anualizadas. Para amortizar a taxa do contrato, use a taxa de juros do financiamento, salvo se a sua planilha indicar outra coisa."
        },
        {
          "question": "Posso modelar aqui um financiamento a taxa variável (ARM)?",
          "answer": "Esta página foi feita para uma parcela no estilo de taxa fixa. As estimativas de um financiamento a taxa variável precisam de hipóteses de tetos de taxa que uma calculadora fixa básica não inclui."
        },
        {
          "question": "Por que o primeiro mês é quase todo juros?",
          "answer": "Os cronogramas de amortização iniciais aplicam mais de cada parcela aos juros porque o saldo é o mais alto. A parte de principal cresce mais adiante no prazo."
        },
        {
          "question": "Quão precisa é uma estimativa de financiamento imobiliário on-line?",
          "answer": "É uma cifra de planejamento, não um compromisso de um credor. As ofertas variam conforme o crédito, os pontos, as contas de depósito e a análise de crédito. Esta página usa capitalização mensal no estilo dos EUA e não inclui o stamp duty do Reino Unido, a capitalização semestral canadense, o LMI da Austrália, o ITBI nem o CET brasileiro."
        },
        {
          "question": "O que é o PMI e quando ele aparece?",
          "answer": "O seguro hipotecário privado costuma se aplicar quando a entrada é pequena. Ele sobe o custo mensal até você alcançar o patrimônio exigido."
        },
        {
          "question": "Posso usá-la para financiamentos de imóveis de investimento?",
          "answer": "Você pode explorar principal e juros com a mesma operação, mas as taxas, as reservas e o tratamento fiscal do investimento são diferentes. Fale com um credor para ofertas de investimento."
        },
        {
          "question": "Como os pontos de desconto afetam a parcela?",
          "answer": "Comprar pontos baixa a taxa e, em geral, a parcela, em troca de dinheiro no fechamento. Execute a calculadora com as duas taxas para comparar."
        },
        {
          "question": "O que acontece se eu arredondar a parcela para cima?",
          "answer": "Pagar um pouco mais todo mês funciona como um pequeno pagamento antecipado e pode encurtar o cronograma. Confirme que o administrador destine o excedente ao principal."
        },
        {
          "question": "Um pagamento quinzenal de financiamento muda a conta?",
          "answer": "Vinte e seis meias parcelas por ano equivalem a treze parcelas completas, o que pode cortar os juros se o administrador as aplicar assim. Pergunte antes de confiar em um plano quinzenal."
        },
        {
          "question": "Quando devo falar com um credor de financiamento imobiliário?",
          "answer": "Use a calculadora para fixar uma faixa de orçamento e depois peça uma estimativa do financiamento (Loan Estimate) para as tarifas, as contas de depósito e as regras de análise que uma página da web não pode conhecer."
        }
      ]
    }
  },
  "auto-loan-calculator": {
    "answer": "Uma calculadora de financiamento de carro estima o valor financiado e a parcela mensal a partir do preço do veículo, da alíquota de imposto, das tarifas, da entrada, do veículo na troca e da APR que você indicar.",
    "metaDescription": "Estime a parcela de um financiamento de carro a partir do preço, da entrada, do veículo na troca, do imposto, das tarifas e da APR.",
    "ui": {},
    "content": {
      "about": "Estime um financiamento de carro a taxa fixa a partir do preço do veículo, de uma entrada, de um veículo na troca, de uma alíquota de imposto sobre vendas que você indicar, de tarifas, de extras opcionais e de uma APR. A página mostra o valor financiado, a parcela e o custo total.",
      "howTo": [
        "Digite o preço do veículo, a entrada em dinheiro e qualquer crédito pelo veículo na troca.",
        "Digite a alíquota de imposto sobre vendas que se aplicar a você. Deixe as tarifas e os extras em 0 se você não os incluir.",
        "Digite a APR e o prazo em meses. 36, 48, 60 e 72 são atalhos.",
        "Clique em Calcular. A APR do exemplo é só um exemplo, não uma oferta de um credor."
      ],
      "examples": [
        {
          "title": "Um veículo de 30.000 com 3000 de entrada",
          "body": "Com imposto, tarifas, extras e veículo na troca em 0, o valor financiado é 27.000. A parcela usa esse valor, a APR e o prazo."
        },
        {
          "title": "Um veículo na troca e uma alíquota de imposto que você digita",
          "body": "O imposto sobre vendas é o preço do veículo multiplicado pela sua alíquota. Depois se subtrai o veículo na troca. Esta não é uma regra para todos os estados."
        }
      ],
      "explanation": "O valor financiado é o preço do veículo mais o imposto sobre vendas, as tarifas e os extras, menos a entrada e o veículo na troca. O imposto sobre vendas usa só a alíquota que você digitar, aplicada ao preço do veículo. A parcela mensal usa a fórmula padrão a taxa fixa. Com uma APR de 0%, a parcela é o valor financiado dividido pelo número de meses. Um prazo mais longo costuma baixar a parcela e subir o juro total. A comparação usa o mesmo valor financiado e a mesma APR e não aponta um prazo como o melhor.",
      "features": [
        "O valor financiado, mostrado à parte do preço, do imposto, das tarifas, dos extras, da entrada e do veículo na troca.",
        "Uma comparação a 36, 48, 60 e 72 meses com o mesmo valor e a mesma APR.",
        "Um cronograma mensal opcional e estimativas opcionais de seguro, combustível e manutenção."
      ],
      "tips": [
        "Use 0 no imposto, nas tarifas, nos extras ou no veículo na troca quando quiser deixar essas linhas de fora.",
        "O seguro, o combustível e a manutenção são valores que você mesmo digita. Não são médias."
      ],
      "limitations": "Esta é uma estimativa a partir das cifras que você indicar. Não é uma aprovação de financiamento, uma taxa prometida nem uma oferta. Os estados tributam um veículo na troca de formas diferentes, então a operação padrão não pretende que exista uma só regra nos Estados Unidos. Um credor pode tratar as tarifas ou os extras de outra forma.",
      "faqs": [
        {
          "question": "Como se calcula a parcela de um financiamento de carro?",
          "answer": "A página financia o preço mais o imposto, as tarifas e os extras que você indicar, depois de subtrair a entrada e o veículo na troca. Depois usa a fórmula de parcela a taxa fixa. Com uma APR de 0%, divide o valor financiado pelo número de meses."
        },
        {
          "question": "Quanto de juros vou pagar em um financiamento de carro?",
          "answer": "O juro total é a soma das parcelas programadas menos o valor financiado. Ele muda com a APR e o prazo. É uma estimativa, não um custo garantido."
        },
        {
          "question": "Uma entrada reduz o valor financiado?",
          "answer": "Sim. O dinheiro que você digitar como entrada é subtraído antes de calcular a parcela."
        },
        {
          "question": "Como um veículo na troca afeta um financiamento de carro?",
          "answer": "O valor do veículo na troca é subtraído do valor que precisa ser financiado. O imposto continua sendo calculado sobre o preço do veículo, porque nem todos os estados tributam um veículo na troca da mesma forma."
        },
        {
          "question": "Um financiamento de carro mais longo reduz a parcela mensal?",
          "answer": "Um prazo mais longo costuma baixar a parcela mensal e subir o juro total. A tabela comparativa mostra isso sem apontar um prazo como melhor."
        },
        {
          "question": "Quanto custa no total um financiamento de carro?",
          "answer": "O total das parcelas é o valor financiado mais os juros. O custo total de compra soma o preço do veículo, o imposto, as tarifas, os extras e os juros."
        },
        {
          "question": "Esses números são enviados a um servidor?",
          "answer": "Não. O preço do veículo, o imposto e o prazo são usados só nesta aba. Não são guardados nem enviados."
        },
        {
          "question": "Devo somar o imposto sobre vendas ao valor do financiamento?",
          "answer": "Se você financiar o imposto e as tarifas, inclua-os no valor financiado; se não, pague-os em dinheiro e deixe-os de fora."
        },
        {
          "question": "Em que a APR difere da taxa de juros cotada?",
          "answer": "A APR pode incorporar certas tarifas; esta operação da parcela usa a taxa e o prazo que você indicar."
        },
        {
          "question": "O que é uma parcela-balão em um financiamento de carro?",
          "answer": "É uma soma final grande que vence no fim; este cronograma simples pressupõe parcelas iguais, sem uma parcela-balão."
        },
        {
          "question": "Pagar de forma quinzenal corta os juros?",
          "answer": "Os pagamentos extras reduzem o principal antes; modele um valor mensal efetivo mais alto para aproximar isso."
        },
        {
          "question": "Como comparo o financiamento da concessionária com o de um banco?",
          "answer": "Compare lado a lado o valor, o prazo e a taxa, e preste atenção nas tarifas antecipadas que mudam a APR."
        },
        {
          "question": "Devo financiar o seguro gap?",
          "answer": "Só se você precisar dele e aceitar os juros sobre esse extra; se não, pague-o à parte."
        },
        {
          "question": "O que acontece se eu refinanciar mais adiante?",
          "answer": "Um financiamento novo substitui o saldo; execute de novo a calculadora com o principal restante e a taxa nova."
        },
        {
          "question": "Quanto devo orçar além da parcela?",
          "answer": "Some o seguro, o combustível, a manutenção e o licenciamento: a parcela sozinha subestima o custo de ter o carro."
        },
        {
          "question": "Uma entrada maior sempre ajuda na aprovação?",
          "answer": "Ela baixa o valor financiado e o risco, o que pode melhorar as ofertas, mas o crédito e a renda continuam importando."
        },
        {
          "question": "Posso estimar a economia de uma quitação antecipada?",
          "answer": "Anote o principal restante e o prazo que falta, e depois compare os juros se você quitar diante de seguir o cronograma."
        },
        {
          "question": "As penalidades por amortização antecipada são habituais nos financiamentos de carro?",
          "answer": "Muitos financiamentos de carro para consumidores permitem a quitação antecipada; leia o seu contrato antes de pressupor que não há tarifas."
        },
        {
          "question": "Como as parcelas mudam se eu incorporar um saldo negativo?",
          "answer": "Somar o saldo do financiamento anterior ao preço novo sobe o valor financiado e a parcela mensal."
        },
        {
          "question": "Devo usar a renda bruta ou o salário líquido para a acessibilidade?",
          "answer": "Avalie as parcelas diante do dinheiro que resta na sua mão, para que o orçamento seja realista."
        }
      ]
    }
  },
  "home-affordability-calculator": {
    "answer": "Uma calculadora de quanto imóvel eu posso pagar estima um preço de imóvel a partir da renda, das dívidas existentes, de uma entrada e das despesas de moradia que você escolher. É uma estimativa de orçamento, não uma aprovação de um credor.",
    "metaDescription": "Estime o preço de um imóvel a partir da renda, das dívidas, da entrada, da taxa de juros e das despesas. É uma estimativa de orçamento, não uma aprovação.",
    "ui": {},
    "content": {
      "about": "Estime um preço de imóvel a partir da renda bruta anual, das dívidas mensais, de uma entrada, de uma taxa e das despesas de moradia que você indicar. A página trabalha para trás a partir de um orçamento de moradia. Ela não diz que um credor vai aprovar esse preço.",
      "howTo": [
        "Digite a renda bruta anual do domicílio e a dívida mensal que você já paga.",
        "Escolha uma entrada como percentual do preço do imóvel ou como um valor.",
        "Digite uma taxa, um prazo e uma alíquota de IPTU. A taxa de exemplo e a alíquota de 1% são só exemplos.",
        "Deixe em branco o seguro, o condomínio e o PMI para que valham 0, ou digite as suas próprias estimativas.",
        "Defina um índice-alvo. Os 36% são a hipótese do exemplo, não uma regra de um credor."
      ],
      "examples": [
        {
          "title": "Renda de 120.000 e 500 de dívida mensal",
          "body": "A renda bruta mensal é 10.000. Com um alvo de 36%, 3600 podem ir para a moradia mais essa dívida, então restam uns 3100 para a moradia antes de somar IPTU, seguro, condomínio ou PMI."
        },
        {
          "title": "Dívidas que esgotam todo o alvo",
          "body": "Se a dívida existente já está no alvo ou acima, a página indica que não há orçamento de moradia. Não mostra um preço de imóvel de 0."
        }
      ],
      "explanation": "A renda bruta mensal é a renda anual dividida por 12. O índice-alvo multiplicado por essa renda é o teto pressuposto para a moradia mais as dívidas que você indicou. Subtrai-se a dívida existente. O que resta deve cobrir principal e juros, o IPTU, o seguro, o condomínio e o PMI. O IPTU é a alíquota que você indicar multiplicada pelo preço do imóvel. Uma entrada em percentual é uma parte desse preço. Uma entrada em valor se soma ao principal do financiamento. As linhas de 28%, 30% e 36% usam o restante dos dados igual e não classificam um índice como melhor.",
      "features": [
        "Um orçamento de moradia depois de subtrair a dívida mensal existente.",
        "Principal e juros, IPTU, seguro, condomínio e PMI, mostrados em linhas separadas.",
        "Uma comparação de cenários a 28%, 30% e 36%."
      ],
      "tips": [
        "Mude o índice-alvo se quiser uma hipótese mais rígida ou mais folgada. A página não trata os 36% como uma regra.",
        "O PMI é o valor mensal que você digitar. Esta página não decide se um financiamento tem PMI."
      ],
      "limitations": "O resultado é uma estimativa educativa a partir das informações que você indicar. Não é aconselhamento financeiro personalizado, uma taxa garantida nem uma aprovação. Os limites reais dependem do credor, do crédito, da localização, dos impostos, do seguro e do programa de financiamento.",
      "faqs": [
        {
          "question": "Quanto de imóvel eu posso pagar?",
          "answer": "Esta página estima um preço a partir da renda, das dívidas, da entrada, da taxa e das despesas de moradia que você digitar. Não é uma promessa de que você possa comprar esse imóvel."
        },
        {
          "question": "Como se calcula a capacidade de compra de um imóvel?",
          "answer": "Parte de uma porção da renda bruta mensal, subtrai a dívida existente e resolve o financiamento e o preço do imóvel que cabem no orçamento de moradia restante."
        },
        {
          "question": "A dívida afeta quanto de imóvel eu posso pagar?",
          "answer": "Sim. A dívida mensal que você indicar é subtraída antes de usar o orçamento de moradia para dimensionar o financiamento."
        },
        {
          "question": "Como a entrada afeta a capacidade de compra?",
          "answer": "Uma entrada em percentual é uma parte do preço estimado. Uma entrada em valor se soma ao principal do financiamento. O rótulo mostra qual você está usando."
        },
        {
          "question": "O que é um índice de endividamento da moradia em relação à renda?",
          "answer": "Aqui é a parte-alvo da renda bruta mensal que se usa para a moradia mais as dívidas que você indicou. Você escolhe o percentual. É uma hipótese, não uma política de um credor."
        },
        {
          "question": "O PMI afeta a capacidade de compra do imóvel?",
          "answer": "Um valor mensal de PMI que você digitar faz parte do orçamento de moradia, então resta menos para principal e juros. Em branco significa 0."
        },
        {
          "question": "O IPTU e o seguro afetam a capacidade de compra?",
          "answer": "Sim. A alíquota se aplica ao preço do imóvel e o seguro anual é dividido por 12. Os dois reduzem o valor que resta para a parcela do financiamento."
        },
        {
          "question": "Esses números são enviados a um servidor?",
          "answer": "Não. A renda, as dívidas e o percentual de entrada são usados nesta aba. Não são enviados a nenhum lugar."
        },
        {
          "question": "Devo usar a renda bruta ou a líquida nos campos?",
          "answer": "Os credores costumam olhar a renda bruta para o índice de endividamento (DTI), mas o seu orçamento deve respeitar o dinheiro que resta na sua mão."
        },
        {
          "question": "Como as taxas de condomínio mudam o preço acessível?",
          "answer": "A taxa mensal de condomínio conta como uma despesa de moradia: umas taxas mais altas deixam menos margem para principal e juros."
        },
        {
          "question": "Que taxa de juros devo pressupor?",
          "answer": "Use uma taxa próxima das ofertas atuais para a sua faixa de crédito; uma mudança pequena de taxa move muito o preço."
        },
        {
          "question": "Um prazo a 15 anos sobe ou baixa o preço que eu posso pagar?",
          "answer": "Os prazos mais curtos significam parcelas mensais mais altas, então o preço de compra acessível costuma baixar."
        },
        {
          "question": "Como devo incluir as bonificações na renda?",
          "answer": "Os credores podem fazer a média ou descontar a remuneração variável; digite só a renda que você possa documentar de forma sustentada."
        },
        {
          "question": "Posso modelar uma entrada maior proveniente de presentes?",
          "answer": "Sim: suba o dado da entrada; confirme com o seu credor as regras da carta de doação."
        },
        {
          "question": "Por que as estimativas on-line não coincidem com uma pré-aprovação?",
          "answer": "A pré-aprovação usa o crédito, as reservas e os acréscimos de análise que este modelo simples de índice de endividamento não pode ver."
        },
        {
          "question": "Os custos de escritura e de fechamento devem reduzir a capacidade de compra?",
          "answer": "Se forem pagos em dinheiro, deixe-os de fora do financiamento; se forem incorporados, sobem o valor financiado."
        },
        {
          "question": "Como os empréstimos estudantis afetam o cálculo?",
          "answer": "Inclua a parcela mensal do empréstimo estudantil nas outras dívidas, para que o índice de endividamento seja honesto."
        },
        {
          "question": "Alugar é mais barato mesmo que eu «possa pagar» um imóvel?",
          "answer": "A capacidade de compra não é a mesma coisa que acumular patrimônio; compare à parte o custo total de ser proprietário com o aluguel."
        },
        {
          "question": "Que percentual de manutenção devo orçar?",
          "answer": "Muitos planejadores usam cerca de 1% do valor do imóvel por ano como uma reserva aproximada de manutenção."
        },
        {
          "question": "Posso testar cenários com duas rendas?",
          "answer": "Some as rendas que se qualifiquem e depois faça um teste de estresse tirando uma renda, por prudência."
        }
      ]
    }
  },
  "debt-payoff-calculator": {
    "answer": "Uma calculadora para quitar dívidas estima em quantos meses vários saldos chegam a zero, e os juros, quando você escolhe para onde vai o pagamento extra.",
    "metaDescription": "Estime quanto você leva para quitar várias dívidas e os juros, escolhendo o plano de maior juros ou o de menor saldo.",
    "ui": {},
    "content": {
      "about": "Estime um cronograma de quitação para mais de uma dívida. Digite o saldo, a APR e o pagamento mínimo de cada uma, e escolha se o dinheiro extra vai para a APR mais alta ou para o saldo menor.",
      "howTo": [
        "Digite pelo menos uma dívida. Adicione mais com Adicionar dívida. O exemplo começa com três dívidas.",
        "Digite um pagamento mínimo maior que um mês de juros desse saldo.",
        "Digite um pagamento mensal extra, ou 0 para usar só os mínimos.",
        "Escolha primeiro o maior juros ou primeiro o saldo menor, e depois clique em Calcular."
      ],
      "examples": [
        {
          "title": "Dois saldos sem juros",
          "body": "Um saldo de 1000 e outro de 500, cada um com um mínimo de 100, quitam primeiro o menor quando as duas taxas são 0. Os mínimos liberados passam então para o saldo que resta."
        },
        {
          "title": "Um mínimo que não cobre os juros",
          "body": "Se um mínimo for menor ou igual aos juros do primeiro mês, a página para e indica que esse saldo não baixaria."
        }
      ],
      "explanation": "Todo mês se cobram juros sobre o saldo à APR dividida por 12. Depois cada dívida recebe o seu pagamento mínimo. O dinheiro extra, e qualquer mínimo que se liberar quando um saldo chegar a zero, vai para a dívida que você selecionou: a de maior APR ou a de menor saldo. Os dois planos podem terminar em meses diferentes e cobrar juros diferentes. A página mostra essas diferenças e não aponta um plano como melhor.",
      "features": [
        "Várias dívidas em uma só estimativa, algo que uma página de parcela de um só empréstimo não faz.",
        "Uma ordem de quitação e os juros de cada dívida.",
        "Uma vista comparativa das duas estratégias, com o pagamento extra e sem ele."
      ],
      "tips": [
        "Use 0 de extra quando você só quiser o cronograma com os pagamentos mínimos.",
        "Dê um nome a cada dívida para que a ordem de quitação se leia com facilidade."
      ],
      "limitations": "Esta é uma estimativa a partir dos saldos, das taxas e dos pagamentos que você indicar. Um credor pode aplicar os pagamentos ou os juros em outro calendário. A contagem de meses não é uma data de calendário garantida.",
      "faqs": [
        {
          "question": "Quanto tempo vou levar para quitar a minha dívida?",
          "answer": "A página conta os meses até que cada saldo que você digitou chegue a zero, conforme os pagamentos e a estratégia que você escolheu. É uma estimativa."
        },
        {
          "question": "O que é o método da avalanche de dívidas?",
          "answer": "«Maior juros primeiro» envia o pagamento extra, e depois qualquer mínimo liberado, para a dívida aberta com a APR mais alta."
        },
        {
          "question": "O que é o método da bola de neve de dívidas?",
          "answer": "«Menor saldo primeiro» envia esse dinheiro extra para a dívida aberta com o saldo menor."
        },
        {
          "question": "Como um pagamento extra afeta a quitação da dívida?",
          "answer": "O valor extra se aplica depois dos mínimos. A comparação mostra as mesmas dívidas com esse valor extra e só com os mínimos."
        },
        {
          "question": "Quanto de juros vou pagar?",
          "answer": "O juro total é a soma dos juros mensais cobrados até que os saldos cheguem a zero. Ele muda com as taxas, os mínimos e para onde vai o pagamento extra."
        },
        {
          "question": "Esses números são enviados a um servidor?",
          "answer": "Não. Os saldos e os mínimos ficam nesta página. Não são enviados a nenhum servidor."
        },
        {
          "question": "Como escolho entre a avalanche e a bola de neve?",
          "answer": "A avalanche aponta primeiro para a APR mais alta para minimizar os juros. A bola de neve quita primeiro o saldo menor para conseguir avanços rápidos. Escolha o método que você vai manter."
        },
        {
          "question": "De que dados um plano para quitar várias dívidas precisa?",
          "answer": "O saldo, a APR e o pagamento mínimo de cada dívida, mais qualquer valor mensal extra que você possa aplicar acima dos mínimos."
        },
        {
          "question": "Como o pagamento extra se aplica todo mês?",
          "answer": "Os mínimos vão para cada dívida; o extra vai para a dívida-alvo daquele momento. Quando essa dívida desaparece, o mínimo dela passa para o próximo alvo."
        },
        {
          "question": "A avalanche sempre custa menos juros?",
          "answer": "Costuma ser assim se você a seguir com constância. A bola de neve pode ganhar na prática quando a motivação te mantém pagando."
        },
        {
          "question": "Posso incluir juntos empréstimos estudantis e cartões?",
          "answer": "Sim, para planejar, se as taxas e os mínimos forem precisos. Os programas federais de empréstimos podem ter regras de pagamento à parte que convém ler junto com a operação."
        },
        {
          "question": "O que faço se uma dívida tiver uma taxa promocional de 0%?",
          "answer": "Deixe-a na lista com a APR promocional e a data de fim em mente. Redirecione os extras antes de a taxa subir se o saldo for ficar."
        },
        {
          "question": "Como estimo o juro total de todas as dívidas?",
          "answer": "Execute o cronograma com o método que você escolher e some as linhas de juros. Compare os totais da avalanche e da bola de neve antes de se comprometer."
        },
        {
          "question": "Devo pausar o investimento para pagar a dívida mais rápido?",
          "answer": "Depende das taxas, das contribuições da empresa e da sua tolerância ao risco. A calculadora mostra a velocidade de quitação; um planejador ajuda com a disjuntiva."
        },
        {
          "question": "O que acontece se eu acrescentar um empréstimo novo no meio do plano?",
          "answer": "Calcule de novo com o novo saldo e o novo mínimo. Os cronogramas anteriores já não se aplicam quando o conjunto de dívidas muda."
        },
        {
          "question": "Posso modelar aqui ofertas de acordo (liquidação)?",
          "answer": "Não com precisão. Os acordos mudam o principal e o efeito no crédito fora de uma amortização simples. Use a documentação do credor para esses cenários."
        },
        {
          "question": "Quão grande deve ser o meu fundo de emergência enquanto eu pago dívida?",
          "answer": "Muitos assessores mantêm um colchão pequeno de dinheiro para que um imprevisto não volte a carregar os cartões. O tamanho exato é pessoal."
        },
        {
          "question": "Os pagamentos mínimos mudam quando os saldos baixam?",
          "answer": "Os emissores costumam recalcular os mínimos. Usar os mínimos de hoje é uma estimativa habitual; atualize-os quando as faturas mudarem."
        },
        {
          "question": "Pagar a cada duas semanas é o mesmo que um extra mensal?",
          "answer": "Nem sempre. Ajuste o modelo a como realmente caem o seu salário e as datas de vencimento, para que o fluxo de caixa seja realista."
        },
        {
          "question": "Quando é útil falar com um consultor de crédito de uma organização sem fins lucrativos?",
          "answer": "Quando os juros se tornam inadministráveis ou você está lidando com cobranças. Um consultor pode revisar opções que uma planilha não pode."
        }
      ]
    }
  },
  "credit-card-payoff-calculator": {
    "answer": "Uma calculadora para pagar o cartão de crédito estima os meses e os juros de um cartão a partir do saldo, da APR e do pagamento mínimo ou fixo que você indicar.",
    "metaDescription": "Estime quanto você leva para quitar o saldo de um cartão de crédito conforme a APR e o pagamento mínimo ou fixo que você indicar.",
    "ui": {},
    "content": {
      "about": "Estime o tempo de quitação e os juros de um cartão de crédito. Você define a APR, um percentual de pagamento mínimo, um piso, um pagamento fixo e um valor extra opcional.",
      "howTo": [
        "Digite o saldo atual e a APR.",
        "Digite o percentual mínimo e o piso que você quer usar nesta estimativa. Nem todos os emissores usam a mesma regra.",
        "Digite um pagamento mensal fixo se quiser que o resultado principal use esse valor. Deixe-o em branco para seguir a fórmula do mínimo.",
        "Adicione um valor extra se quiser incluí-lo junto com o pagamento fixo."
      ],
      "examples": [
        {
          "title": "1000 a 0% com um pagamento de 100",
          "body": "O saldo baixa 100 todo mês e chega a zero em 10 meses. Os juros são 0."
        },
        {
          "title": "Um pagamento que não cobre os juros",
          "body": "Se o pagamento escolhido for menor ou igual aos juros, a página indica que o saldo não baixaria, em vez de mostrar uma quitação."
        }
      ],
      "explanation": "Nesta estimativa, os juros são o saldo no início do mês multiplicado pela APR e dividido por 12. O mínimo é o maior entre o percentual e o piso, salvo se o saldo for menor. Um pagamento fixo se mantém igual todo mês até que o último pagamento liquide o resto. Isto não é o método de saldo médio diário que cada emissor usa.",
      "features": [
        "Uma fórmula de mínimo que você pode ver: o percentual do saldo inicial, ou o piso, o que for maior.",
        "Um pagamento fixo e um pagamento fixo mais um extra, mostrados junto ao plano de mínimos.",
        "Um cronograma mês a mês opcional."
      ],
      "tips": [
        "Deixe o pagamento fixo em branco quando quiser que o resultado principal siga o percentual e o piso.",
        "Use uma APR de 0% quando quiser ver só o principal."
      ],
      "limitations": "Os resultados são estimativas baseadas na APR e nas hipóteses de pagamento que você indicar. Um emissor de cartão pode usar um ciclo de fatura, um saldo médio diário ou outro mínimo. Esta página não reproduz a fatura de cada emissor.",
      "faqs": [
        {
          "question": "Quanto tempo vou levar para pagar o meu cartão de crédito?",
          "answer": "A página conta os meses até que o saldo chegue a zero conforme a regra de pagamento que você selecionou. A contagem começa no mês em que você começa."
        },
        {
          "question": "Quanto devo pagar todo mês?",
          "answer": "Você escolhe a hipótese. A linha do mínimo usa o seu percentual e o seu piso. A linha fixa usa o valor mensal que você digitar."
        },
        {
          "question": "Como a APR do cartão afeta a quitação?",
          "answer": "Uma APR mais alta soma mais juros todo mês, então o mesmo pagamento leva mais tempo e custa mais juros."
        },
        {
          "question": "Pagar a mais reduz os juros?",
          "answer": "Um valor adicional, ou um pagamento fixo mais alto, costuma encurtar o cronograma e baixar o juro total. A comparação mostra as cifras sem apontar uma linha como melhor."
        },
        {
          "question": "Como se estima a quitação de um cartão de crédito?",
          "answer": "O saldo cresce com um mês de juros e depois se subtrai o pagamento. O último pagamento é só o que resta. Não é uma cópia da fatura de um emissor concreto."
        },
        {
          "question": "Esses números são enviados a um servidor?",
          "answer": "Não. O saldo do cartão, a APR e o pagamento são estimados nesta aba. Não são enviados a um servidor."
        },
        {
          "question": "Como estimo os meses para pagar um cartão de crédito?",
          "answer": "Digite o saldo, a APR e o valor fixo que você pode pagar todo mês. A calculadora projeta como o saldo se reduz até o cartão chegar a zero."
        },
        {
          "question": "Que pagamento mensal liquida um cartão em um prazo concreto?",
          "answer": "Escolha um horizonte de quitação quando a ferramenta o admitir, ou suba o pagamento até o cronograma encaixar com a sua data-limite. Uns pagamentos mais altos cortam meses e juros."
        },
        {
          "question": "Por que o pagamento mínimo é uma armadilha?",
          "answer": "Os mínimos costumam ser um percentual pequeno do saldo mais os juros, então a quitação pode se alongar por anos. Pagar mais que o mínimo é o que encurta o cronograma."
        },
        {
          "question": "A capitalização da APR muda a estimativa?",
          "answer": "Os emissores de cartão podem usar taxas periódicas diárias. Um modelo mensal é uma estimativa de planejamento próxima, não uma réplica da fatura."
        },
        {
          "question": "Como as compras novas afetam os planos de quitação?",
          "answer": "Os lançamentos novos sobem o saldo e os juros. Congele o gasto discricionário nesse cartão enquanto você segue um cronograma de quitação."
        },
        {
          "question": "Devo incluir as tarifas no saldo?",
          "answer": "Parta do saldo atual da fatura ao qual os juros serão aplicados. Some as tarifas pendentes conhecidas se quiser um plano conservador."
        },
        {
          "question": "O que acontece se eu só pagar os juros todo mês?",
          "answer": "O principal quase não se move e a quitação não chega. A calculadora mostra por que importam os pagamentos fixos que vão cortando o principal."
        },
        {
          "question": "Posso modelar um período introdutório de APR a 0%?",
          "answer": "Aproxime-o usando 0% durante os meses da promoção e depois passe para a taxa habitual para o saldo restante. Fique de olho na data de fim da promoção no seu cartão."
        },
        {
          "question": "Quanto de juros vou pagar no total?",
          "answer": "A soma dos juros ao longo dos meses projetados. Compare esse total com um plano de pagamentos mais rápido para ver a economia."
        },
        {
          "question": "Um pagamento quinzenal do cartão é melhor?",
          "answer": "Pagar a metade duas vezes por mês pode reduzir um pouco o saldo médio se o emissor o registrar rápido. Confirme as regras de registro da sua conta."
        },
        {
          "question": "Como as transferências de saldo mudam a conta?",
          "answer": "Uma APR de transferência mais baixa pode cortar os juros, mas as tarifas de transferência se somam ao principal. Modele a tarifa mais a taxa nova antes de mover um saldo."
        },
        {
          "question": "Por que as datas de quitação atrasam na vida real?",
          "answer": "Os pagamentos não realizados, as tarifas por atraso e as compras novas alongam o cronograma. Calcule de novo quando o saldo ou o pagamento mudar."
        },
        {
          "question": "Posso pagar vários cartões com esta ferramenta?",
          "answer": "Modele-os um a um, ou passe para uma ferramenta para quitar dívidas que ordene vários saldos. Mantenha precisa cada APR."
        },
        {
          "question": "Quando devo ligar para o emissor no lugar disso?",
          "answer": "Para planos por dificuldades, lançamentos contestados ou cifras exatas de quitação. As estimativas on-line orientam o orçamento; os administradores dão as cifras oficiais."
        }
      ]
    }
  },
  "significant-figures-calculator": {
    "answer": "Uma calculadora de algarismos significativos conta os dígitos que um número escrito realmente mostra, arredonda na precisão que você escolher e aplica a regra das casas decimais nas somas e a dos menores algarismos significativos nos produtos. 150, 80 e 1200 ficam ambíguos.",
    "metaDescription": "Conte algarismos significativos, arredonde na precisão que você escolher, converta para notação científica e opere com as regras de algarismos significativos.",
    "ui": {},
    "content": {
      "about": "Conte os algarismos significativos de um número escrito, arredonde-o na precisão que você escolher, converta-o para notação científica, ou some, subtraia, multiplique e divida com a regra correspondente. A aritmética fica nesta aba do navegador. Um número inteiro que termina em zero, como 150, 80 ou 1200, é deixado como um intervalo em vez de uma única contagem.",
      "howTo": [
        "Digite um número, ou uma expressão com +, −, ×, ÷, parênteses e uma potência inteira como 2.50^2.",
        "Use EXP quando quiser um expoente em notação científica, como em 1.500e3. Aceitam-se decimais e um sinal de menos inicial.",
        "Escolha de 1 a 5, ou digite uma precisão personalizada de 1 a 50, quando quiser arredondar o valor. Deixe em branco para contar um número ou para que a operação defina a precisão.",
        "Clique em Resolver. Leia o valor, a contagem ou a posição limitante, e a explicação. Copiar copia o resultado mostrado."
      ],
      "examples": [
        {
          "title": "1,00 e 0,080",
          "body": "1,00 tem 3 algarismos significativos. 0,08 tem 1, e 0,080 tem 2 porque o último zero vem depois da vírgula decimal."
        },
        {
          "title": "150, 80 e 1200",
          "body": "150 pode ter 2 ou 3 algarismos significativos (1.5e2 ou 1.50e2). 80 pode ter 1 ou 2. 1200 pode ter 2, 3 ou 4. A página não escolhe um."
        },
        {
          "title": "Arredondamento e aritmética",
          "body": "123,456 com 3 algarismos significativos é 123. 999 com 2 é 1,0 × 10³. 12,11 + 0,3 é 12,4. 2,5 × 3,42 é 8,6. 15,0 ÷ 4,0 é 3,8."
        }
      ],
      "explanation": "A contagem segue os dígitos que você digitou, inclusive os zeros que a forma escrita torna significativos. O arredondamento conserva dígitos de guarda até o passo final para cima a partir da metade. A soma e a subtração não são forçadas a seguir a regra da multiplicação.",
      "features": [
        "Os zeros finais depois da vírgula decimal continuam significativos, então 1,00 tem 3 e 0,080 tem 2.",
        "Os zeros finais de um número inteiro ficam ambíguos, com uma forma em notação científica para cada contagem possível.",
        "O arredondamento é para cima a partir da metade e mostra a precisão que você pediu, com notação científica quando um inteiro sem mais a ocultaria.",
        "A soma e a subtração usam a posição decimal menos precisa. A multiplicação e a divisão usam o menor número de algarismos significativos."
      ],
      "tips": [
        "Digite 1.500e3 quando quiser dizer quatro algarismos significativos. Escrever 1500 deixa a contagem sem decidir.",
        "Use a calculadora de porcentagem para o percentual de um número. Esta página não converte um resultado em percentual."
      ],
      "limitations": "Cada número escrito é tratado como uma medida. A página não pode saber se o zero de 150 foi medido. Uma precisão superior a 50 algarismos significativos é recusada, e são recusados os expoentes fora do intervalo de −9999 a 9999. As potências inteiras usam um expoente de −999 a 999. Não se avaliam logaritmos. Os resultados seguem as regras desta página, não a política de arredondamento local de um laboratório.",
      "sections": [
        {
          "heading": "O que a contagem usa",
          "paragraphs": [
            "Os dígitos diferentes de zero são significativos. Os zeros entre dígitos diferentes de zero são significativos, então 1005 tem 4 e 10,01 tem 4. Os zeros iniciais só ocupam posições, então 0,08 tem 1 e 0,00450 tem 3.",
            "Os zeros depois da vírgula decimal que seguem um dígito diferente de zero são significativos. 4,0, 2,0, 81,60, 1,00 e 1000,0 seguem essa regra. Um zero escrito como 0 ou 0,000 conta como 1 algarismo significativo. As posições decimais de 0,000 continuam importando para a soma.",
            "O expoente de 1.5e3 ou 1.500e3 não muda o coeficiente. 1.5e3 tem 2 algarismos significativos. 1.500e3 tem 4. 6.022e23 tem 4. 3.00e-8 tem 3."
          ]
        },
        {
          "heading": "Números inteiros ambíguos",
          "paragraphs": [
            "150, 80, 1200 e 1000 terminam em zero e não têm vírgula decimal. Os zeros finais podem ter sido medidos ou só ocupar uma posição. 150 tem 2 ou 3 algarismos significativos. 80 tem 1 ou 2. 1200 tem 2, 3 ou 4. 1000 tem de 1 a 4.",
            "A notação científica elimina a dúvida. 1.200e3 tem 4 algarismos significativos. 1.20e3 tem 3. 1.2e3 tem 2. 1000,0 tem 5 porque a vírgula decimal torna significativos os zeros."
          ]
        },
        {
          "heading": "O arredondamento e as duas regras de operação",
          "paragraphs": [
            "Para cima a partir da metade significa que, se o primeiro dígito descartado for 5 ou mais, o último dígito conservado sobe 1, afastando-se de zero. 1,2345 com 4 algarismos significativos é 1,235. 1,25 com 2 é 1,3, e −1,25 com 2 é −1,3. 999 com 2 é 1,0 × 10³, que se copia como 1.0e3. 1200 com 4 é 1,200 × 10³.",
            "12,11 + 0,3 é 12,4 porque 0,3 chega só até os décimos. 2,5 × 3,42 é 8,6 porque 2,5 tem menos algarismos significativos. 15,0 ÷ 4,0 é 3,8. A divisão por zero é recusada. Um número contado ou definido é exato. Deixe-o de fora da expressão para que não limite os dígitos medidos."
          ]
        }
      ],
      "faqs": [
        {
          "question": "A calculadora de algarismos significativos é grátis?",
          "answer": "Sim. Você pode contar, arredondar, converter e calcular aqui sem pagar nem criar uma conta."
        },
        {
          "question": "Quantos algarismos significativos tem 150?",
          "answer": "Não se pode determinar só com 150. A contagem é 2 se o zero só ocupar a posição das dezenas (1,5 × 10²), ou 3 se o zero foi medido (1,50 × 10²)."
        },
        {
          "question": "Por que 1200 não recebe uma única contagem?",
          "answer": "Os zeros finais não têm vírgula decimal, então podem ser significativos ou não. 1200 pode ter 2, 3 ou 4 algarismos significativos: 1.2e3, 1.20e3 ou 1.200e3."
        },
        {
          "question": "Como se arredonda 999 para 2 algarismos significativos?",
          "answer": "999 com 2 algarismos significativos é 1,0 × 10³. O inteiro 1000 ocultaria essa precisão, então o resultado fica em notação científica. A forma copiável é 1.0e3."
        },
        {
          "question": "Quanto é 12,11 mais 0,3 com algarismos significativos?",
          "answer": "12,4. A soma usa a posição decimal menos precisa. 0,3 é preciso até os décimos, e a soma exata 12,41 se arredonda para cima a partir da metade para 12,4."
        },
        {
          "question": "Esses números são enviados a um servidor?",
          "answer": "Não. Os números são calculados nesta aba do navegador. O Tools Star Hub não os envia a um servidor nem os guarda no armazenamento local."
        },
        {
          "question": "Como conto os algarismos significativos de um decimal como 0,00450?",
          "answer": "Os zeros iniciais depois da vírgula não são significativos; os zeros finais depois de um dígito diferente de zero são, então 0,00450 tem três."
        },
        {
          "question": "Como arredondo um valor para um número escolhido de algarismos significativos?",
          "answer": "Digite o número, escolha a contagem-alvo e use o resultado arredondado que a ferramenta mostra."
        },
        {
          "question": "Por que usar notação científica para inteiros que terminam em zeros?",
          "answer": "Ela deixa claro se os zeros finais são significativos, ao contrário de um simples 1200."
        },
        {
          "question": "Como a multiplicação limita os algarismos significativos?",
          "answer": "O produto deve levar o menor número de algarismos significativos presente entre os fatores."
        },
        {
          "question": "Como a soma limita as posições decimais?",
          "answer": "A soma segue a posição decimal menos precisa entre as parcelas."
        },
        {
          "question": "Posso colar medidas de laboratório com unidades?",
          "answer": "Digite só a parte numérica; anote as unidades à parte no seu caderno."
        },
        {
          "question": "O que acontece se eu pedir mais algarismos significativos do que o dado tem?",
          "answer": "Você não pode criar precisão; a ferramenta não deve inventar dígitos extras diferentes de zero."
        },
        {
          "question": "Os fatores de conversão exatos são tratados com precisão infinita?",
          "answer": "Nos trabalhos de aula, as constantes definidas exatas costumam ser tratadas assim; siga a regra do seu professor."
        },
        {
          "question": "Como informo os resultados de uma titulação química?",
          "answer": "Ajuste-os à precisão do instrumento e às regras de algarismos significativos que o seu manual de laboratório indicar."
        },
        {
          "question": "A calculadora guarda os valores das minhas tarefas?",
          "answer": "Os valores ficam na sessão do navegador; copie você mesmo as respostas finais no seu relatório."
        },
        {
          "question": "Posso revisar os passos intermediários antes do arredondamento final?",
          "answer": "Conserve dígitos de guarda enquanto calcula e arredonde uma só vez para a resposta final quando essa for a norma."
        },
        {
          "question": "Por que dois livros didáticos podem discordar sobre os algarismos significativos de 100?",
          "answer": "Por causa dos zeros finais ambíguos; a notação científica elimina a ambiguidade."
        },
        {
          "question": "É aceitável truncar em vez de arredondar?",
          "answer": "Truncar enviesa os resultados; os trabalhos de aula habituais esperam um arredondamento correto."
        },
        {
          "question": "Como escrevo números em notação e?",
          "answer": "Use formas como 1.25e3 se o campo as aceitar, igual que na notação científica."
        }
      ]
    }
  },
  "age-calculator": {
    "answer": "Uma calculadora de idade conta os anos, meses e dias entre uma data de nascimento e hoje, ou outra data que você escolher.",
    "metaDescription": "Conte anos, meses e dias desde uma data de nascimento até hoje ou outra data posterior. Os dias bissextos seguem o calendário, não um ano de 365 dias.",
    "ui": {},
    "content": {
      "about": "A calculadora de idade conta os anos completos, depois os meses restantes e depois os dias restantes desde uma data de nascimento até hoje, ou até outra data que você escolher. Também mostra o número total de dias. Use para um aniversário ou a idade que alguém terá em um dia futuro. Ela segue o calendário, inclusive os dias bissextos. Não divide a contagem de dias por 365.",
      "howTo": [
        "Digite a data de nascimento.",
        "Deixe vazia a segunda data para usar hoje, ou escolha outra data se quiser a idade naquele dia.",
        "Clique em Calcular. A página mostra anos, meses, dias e o total de dias.",
        "Se a segunda data for anterior ao nascimento, a página para e pede uma data posterior."
      ],
      "examples": [
        {
          "title": "Nascido em 1º de janeiro de 2000, idade em 1º de janeiro de 2026",
          "body": "Digite 2000-01-01 como data de nascimento e 2026-01-01 como a outra data. Calcular mostra 26 anos, 0 meses e 0 dias. O total de dias é 9497. Essa contagem inclui os sete dias bissextos de 2000 a 2024. Dividir 9497 por 365 não dá esta idade."
        },
        {
          "title": "Um aniversário em dia bissexto",
          "body": "Digite 2000-02-29 e 2001-02-28. Calcular mostra 0 anos, 11 meses e 30 dias. O total de dias é 365. O ano 2001 não é bissexto, então 29 de fevereiro não existe em 2001. A contagem recua um mês e usa a duração de janeiro de 2001, que tem 31 dias."
        },
        {
          "title": "Idade em uma data futura",
          "body": "Digite 2010-06-15 e 2030-06-15. Calcular mostra 20 anos, 0 meses e 0 dias. O total de dias é 7305. Uma data anterior ao nascimento é recusada com uma mensagem que indica que a data escolhida não pode ser anterior à data de nascimento."
        }
      ],
      "explanation": "A idade é contada desde a data de nascimento do calendário até a data escolhida. A ferramenta subtrai anos, depois meses e depois dias. Se o número de dias ficar negativo, toma emprestada a duração do mês anterior. Se o número de meses ficar negativo, toma emprestado um ano. O total de dias é o número de meia-noites entre as duas datas em UTC, então um dia bissexto dentro do intervalo é um dia a mais.",
      "tips": [
        "Use a segunda data quando precisar de uma idade em um aniversário, uma consulta futura ou um aniversário passado. Vazio significa hoje.",
        "Para alguém nascido em 29 de fevereiro, escolha uma data real de um ano não bissexto, como 28 de fevereiro ou 1º de março. A página não inventará 29 de fevereiro de 2001.",
        "Leia juntos os anos, os meses e os dias. A linha do total de dias é a duração do intervalo, não uma segunda idade.",
        "Se o resultado parecer defasado um mês, confira qual é a data de nascimento. Um par invertido é recusado quando a segunda data é anterior, e dá outra idade quando as duas datas são válidas."
      ],
      "limitations": "A contagem vai da data de nascimento até hoje, ou até outra data que você escolher. Uma data anterior ao nascimento é recusada. Datas impossíveis são recusadas. É aritmética de calendário, não uma idade médica nem uma idade legal para um contrato.",
      "sections": [
        {
          "heading": "Por que dividir por 365 dá outro número",
          "paragraphs": [
            "De 1º de janeiro de 2000 a 1º de janeiro de 2026 há 9497 dias. 9497 ÷ 365 são uns 26,02, que não é «26 anos, 0 meses, 0 dias». A idade de calendário é uma contagem de aniversários. A contagem de dias é uma linha à parte na página.",
            "Um ano nesta ferramenta não são 365 dias nem 365,25 dias. É o mesmo mês e dia de um ano posterior, ajustado quando esse dia não existe. Por isso um aniversário de 29 de fevereiro não completa um ano em 28 de fevereiro do ano seguinte."
          ]
        },
        {
          "heading": "Como se toma emprestado um mês curto",
          "paragraphs": [
            "Se o dia da data de cálculo for anterior no mês ao dia de nascimento, a ferramenta recua um mês e soma o número de dias do mês anterior. Janeiro toma emprestado dezembro do ano anterior, que tem 31 dias.",
            "Uma data impossível, como 31 de abril ou 29 de fevereiro de 2001, é recusada antes de mostrar uma idade. O campo de nascimento deve ser uma data real do calendário."
          ]
        },
        {
          "heading": "O que esta contagem não é",
          "paragraphs": [
            "O resultado é aritmética de calendário. Não é uma idade médica nem uma idade legal para um contrato, uma carteira ou um benefício. Essas normas às vezes contam o próprio aniversário de uma forma especial. Esta página não faz isso.",
            "Deixar vazia a segunda data usa a data do seu navegador, conforme o relógio do aparelho. Mudar o relógio muda «hoje». Uma data que você digita é usada tal como você a digitou."
          ]
        },
        {
          "heading": "Privacidade",
          "paragraphs": [
            "As duas datas ficam nesta aba. A contagem não as envia a um servidor nem as grava no armazenamento local. A análise, se você a aceitar, pode registrar que a página foi aberta. Ela não recebe as datas."
          ]
        }
      ],
      "faqs": [
        {
          "question": "Como calculo a minha idade exata?",
          "answer": "Digite a sua data de nascimento e clique em Calcular. A página conta os anos completos, depois os meses completos desde o último mês de aniversário e depois os dias restantes. Também mostra o total de dias. Deixar vazia a segunda data usa hoje."
        },
        {
          "question": "Como se conta a idade de alguém nascido em 29 de fevereiro?",
          "answer": "A contagem segue o calendário real. De 29 de fevereiro de 2000 a 28 de fevereiro de 2001 o resultado é 0 anos, 11 meses e 30 dias, e o total é de 365 dias. A ferramenta não trata todos os anos como de 365 dias."
        },
        {
          "question": "Posso calcular a idade em uma data futura?",
          "answer": "Sim, desde que essa data não seja anterior à data de nascimento. De 15 de junho de 2010 a 15 de junho de 2030 o resultado é 20 anos, 0 meses e 0 dias, com 7305 dias no total."
        },
        {
          "question": "Por que o total de dias não são os anos vezes 365?",
          "answer": "O total de dias inclui os dias bissextos dentro do intervalo. De 1º de janeiro de 2000 a 1º de janeiro de 2026 a idade de calendário é de 26 anos, 0 meses e 0 dias, e o total é de 9497 dias. Dividir esse total por 365 é outro cálculo."
        },
        {
          "question": "E se a segunda data for anterior ao nascimento?",
          "answer": "A página a recusa com uma mensagem que indica que a data escolhida não pode ser anterior à data de nascimento."
        },
        {
          "question": "Meus dados são enviados a um servidor?",
          "answer": "Não. As datas ficam nesta aba enquanto a idade é contada. Não são enviadas a um servidor nem gravadas no armazenamento local."
        },
        {
          "question": "Como calculo a idade em anos, meses e dias?",
          "answer": "Digite a data de nascimento e a data de cálculo. A calculadora conta os anos completos e depois os meses e dias restantes com regras de calendário, em vez de um ano fixo de 365 dias."
        },
        {
          "question": "Posso achar a idade em uma data passada concreta?",
          "answer": "Sim. Coloque essa data como segunda data para ver que idade alguém tinha então. É útil para registros históricos e conferências de requisitos."
        },
        {
          "question": "Por que os anos bissextos mudam o total de dias?",
          "answer": "29 de fevereiro acrescenta um dia extra nos anos bissextos, então a contagem de dias entre duas datas não é anos × 365. A ferramenta leva em conta esses dias do calendário."
        },
        {
          "question": "Como se calcula a idade com um aniversário em 29 de fevereiro segundo outras normas?",
          "answer": "As convenções variam conforme o país e a normativa. Muitas ferramentas usam 28 de fevereiro ou 1º de março como aniversário nos anos não bissextos; esta calculadora segue o calendário como se descreve nos seus exemplos."
        },
        {
          "question": "Os pais podem usá-la para as idades-limite de escolarização?",
          "answer": "Sim, como ajuda para planejar. Confirme sempre a data-limite oficial da escola e as normas locais, que podem diferir de uma contagem geral de idade."
        },
        {
          "question": "A calculadora conta a data final como um dia completo?",
          "answer": "A idade costuma contar o tempo completado até a data de cálculo. Um aniversário nessa data costuma significar que aquele ano acaba de ser completado."
        },
        {
          "question": "Por que o meu resultado difere em um dia de outro site?",
          "answer": "Os fusos horários, a contagem inclusiva e as regras do dia bissexto variam. Iguale as duas datas e a regra do dia bissexto antes de comparar."
        },
        {
          "question": "Posso calcular igualmente a idade de um animal de estimação?",
          "answer": "A idade cronológica usa a mesma aritmética de datas. As tabelas de «anos humanos» dos pets são fórmulas à parte, não uma idade de calendário."
        },
        {
          "question": "É preciso a hora do dia?",
          "answer": "A maioria das ferramentas de idade usa datas inteiras do calendário. As horas e os minutos raramente importam, salvo se uma norma definir a idade em um instante preciso."
        },
        {
          "question": "Como confiro a idade para a aposentadoria ou um benefício?",
          "answer": "Calcule aqui a idade cronológica e depois aplique as regras de idade e os documentos que o programa exigir. Os requisitos são legais, não só aritméticos."
        },
        {
          "question": "E se eu só conhecer o ano de nascimento?",
          "answer": "Você precisa pelo menos do mês e do dia para uma idade exata. Com só o ano você pode estimar um intervalo, não um resultado exato em anos, meses e dias."
        },
        {
          "question": "As datas de cálculo futuras mostram a idade que se terá?",
          "answer": "Sim, quando a ferramenta admite datas futuras. Isso ajuda a planejar com antecedência aniversários e eventos com limite de idade."
        },
        {
          "question": "O horário de verão afeta a idade em dias?",
          "answer": "Não nas calculadoras só de datas. O horário de verão muda a hora do relógio, não a diferença entre datas do calendário."
        },
        {
          "question": "As datas de nascimento ficam guardadas depois de calcular?",
          "answer": "Os valores ficam na sessão do navegador para o cálculo. Limpe os campos se as datas forem sensíveis."
        }
      ]
    }
  },
  "fantasy-point-calculator": {
    "answer": "Os pontos de fantasy são cada estatística multiplicada pelos pontos que a sua liga dá a ela, e depois somados. Digite as estatísticas de um jogador, ajuste as regras ilustrativas às da sua liga e você verá o total com um detalhamento.",
    "metaDescription": "Calcule pontos de fantasy de críquete, futebol e basquete com as estatísticas da partida, regras editáveis salvas no seu navegador e um detalhamento.",
    "ui": {},
    "content": {
      "about": "Esta calculadora de pontos de fantasy converte as estatísticas de uma partida de um jogador em um total de pontos para críquete, futebol ou basquete. Parte de um conjunto simples de regras de pontuação ilustrativas para cada esporte, e cada regra pode ser mudada para coincidir com a liga em que você joga. Suas regras personalizadas podem ser salvas neste navegador para que se carreguem da próxima vez. O resultado inclui um detalhamento linha a linha que mostra cada estatística, o seu valor e o seu subtotal, para que você veja de onde saem exatamente os pontos. A ferramenta serve para ligas de fantasy de toda a temporada ou casuais entre amigos; não oferece previsões, odds nem nada relacionado a apostas.",
      "howTo": [
        "Escolha críquete, futebol ou basquete.",
        "Digite as cifras do jogador em uma partida, como corridas, wickets, gols ou rebotes. Deixe uma estatística em branco se ela não se aplicar.",
        "Clique em Editar regras de pontuação para mudar os pontos de qualquer estatística e fazê-los coincidir com as regras da sua liga; depois clique em Salvar regras personalizadas se quiser que elas sejam lembradas neste aparelho.",
        "Leia o total e a tabela de detalhamento. Use Copiar detalhamento para colá-lo no chat da liga, ou Limpar estatísticas para começar com o próximo jogador."
      ],
      "examples": [
        {
          "title": "Críquete: um all-rounder batedor",
          "body": "Com as regras padrão, um jogador que marca 45 corridas com 4 fours e 2 sixes, toma 1 wicket e segura 1 catch soma 45 + 4 + 4 + 25 + 8 = 86 pontos. O bônus por four é de 1 ponto cada um e o bônus por six é de 2 pontos cada um, além das corridas."
        },
        {
          "title": "Futebol: um gol com uma advertência",
          "body": "Um atacante com 1 gol, 1 assistência, 3 chutes a gol e 1 cartão amarelo soma 5 + 3 + 3 − 1 = 10 pontos com os valores padrão. Se a sua liga der 6 pontos por um gol de um meio-campista, mude o valor do gol para 6 antes de digitar esse jogador."
        },
        {
          "title": "Basquete: um duplo-duplo",
          "body": "Um armador com 22 pontos, 10 rebotes, 11 assistências, 2 roubos, 1 toco e 4 perdas soma 22 + 12 + 16,5 + 6 + 3 − 4 = 55,5 pontos de fantasy com as regras padrão."
        }
      ],
      "explanation": "A pontuação de fantasy é uma soma ponderada. Cada estatística é multiplicada pelos pontos que a sua liga dá por uma unidade, e os produtos são somados. A calculadora aplica exatamente essa regra e nada mais, então a resposta só é tão precisa quanto as regras que você digita.",
      "features": [
        "Três esportes com conjuntos de regras à parte, editáveis por estatística.",
        "Pontos negativos por coisas como ducks, cartões, gols contra e perdas de bola.",
        "Valores decimais de pontuação, como 1,2 pontos por rebote.",
        "Regras personalizadas salvas só no localStorage do seu navegador, com uma redefinição para os valores padrão de um clique.",
        "Uma tabela de detalhamento e um resumo de texto que se pode copiar."
      ],
      "tips": [
        "Digite as estatísticas a partir de uma súmula oficial ou um scorecard, não de memória.",
        "Salve um conjunto de regras por esporte. Se você jogar duas ligas de futebol com regras diferentes, anote o segundo conjunto ou redefina entre uma e outra.",
        "Confira se a sua liga pontua as corridas por corrida ou só o bônus de boundary, porque isso muda muito os totais de críquete.",
        "Use Copiar detalhamento quando um companheiro de liga questionar um placar; as contas tornam fácil conferir a aritmética."
      ],
      "limitations": "A ferramenta pontua um jogador de cada vez com pontos fixos por unidade. Não admite regras conforme o papel, bônus por limiar, faixas de strike rate ou economy rate, multiplicadores de capitão, totais de equipe nem importações automáticas de estatísticas. As regras salvas ficam em um só navegador. As regras padrão são só ilustrativas, então os totais diferirão de qualquer plataforma a menos que você digite os valores dessa plataforma.",
      "sections": [
        {
          "heading": "Método de cálculo",
          "paragraphs": [
            "Para cada estatística com um valor, o subtotal = quantidade × pontos por unidade. O total é a soma de todos os subtotais, arredondada para duas casas decimais para evitar o ruído de ponto flutuante, como 3,5999999. As estatísticas em branco são omitidas, e os zeros não somam nada. As quantidades não podem ser negativas, mas os pontos por unidade podem, que é como se pontuam as penalidades.",
            "As regras de bônus que dependem de limiares, como um bônus por 50 corridas, um bônus por hat-trick ou um bônus por triplo-duplo, não estão incluídas, porque as ligas fixam esses limiares de formas muito diferentes. Calcule-os a partir da folha de estatísticas e some-os à mão ao total copiado, para que o detalhamento conserve claras as linhas por estatística e o bônus fique visível como um ajuste à parte."
          ]
        },
        {
          "heading": "Sobre as regras padrão",
          "paragraphs": [
            "Os valores padrão são um ponto de partida neutro escrito para esta ferramenta. Não são o sistema oficial de pontuação de nenhuma plataforma, liga ou competição de fantasy, e não foram copiados de uma. As plataformas mudam as suas regras de uma temporada para outra e muitas vezes pontuam de forma diferente conforme o papel do jogador, o formato da partida ou a competição. Antes de confiar em um total, abra a página de pontuação da sua liga e copie esses valores no editor de regras.",
            "Valores padrão de críquete: 1 por corrida, 1 extra por four, 2 extras por six, 25 por wicket, 8 por over maiden, 8 por catch, 12 por stumping e −2 por um duck. Valores padrão de futebol: 5 por gol, 3 por assistência, 4 por não sofrer gol, 1 por chute a gol, 1 por defesa, −1 por cartão amarelo, −3 por cartão vermelho e −2 por gol contra. Valores padrão de basquete: 1 por ponto, 1,2 por rebote, 1,5 por assistência, 3 por roubo, 3 por toco e −1 por perda."
          ]
        },
        {
          "heading": "Como ler o detalhamento",
          "paragraphs": [
            "Cada linha da tabela mostra a estatística, quantas vezes ocorreu, os pontos por uma e o subtotal. As linhas com um subtotal negativo aparecem em vermelho para que as penalidades se vejam com facilidade. Se um total parecer incorreto, a causa quase sempre é uma linha: uma estatística digitada no quadro errado, um valor de regra diferente do da sua liga, ou um bônus que a sua liga dá e que este conjunto de regras não inclui.",
            "Quando duas pessoas de uma liga não coincidem em um placar, cole o detalhamento copiado no chat. Qualquer um pode então conferir a aritmética linha a linha com a súmula oficial de estatísticas."
          ]
        },
        {
          "heading": "Como funciona o salvamento",
          "paragraphs": [
            "Salvar regras personalizadas grava os seus valores do esporte selecionado no localStorage do seu navegador, sob uma chave desse esporte. Nada é enviado a um servidor. Apagar os dados do site, usar uma janela privada ou mudar de navegador elimina as regras salvas. Redefinir para os valores padrão apaga a cópia salva e restaura os valores ilustrativos."
          ]
        },
        {
          "heading": "Usá-la de forma justa",
          "paragraphs": [
            "A calculadora ajuda a resolver um placar ou a conferir as contas de uma liga depois de uma partida. Não classifica jogadores, não prevê o desempenho nem sugere escolhas, e não deve ser usada para apostar. Se você jogar concursos com entrada paga, siga as leis do lugar onde você vive e os termos da própria plataforma."
          ]
        }
      ],
      "faqs": [
        {
          "question": "Os pontos padrão são os mesmos que no Dream11, no FPL ou na ESPN?",
          "answer": "Não. Os valores padrão são ilustrativos e foram escritos para esta ferramenta. Substitua-os pelas regras de pontuação publicadas da sua plataforma ou liga para obter um total coincidente."
        },
        {
          "question": "Posso mudar os pontos de cada estatística?",
          "answer": "Sim. Clique em Editar regras de pontuação, digite um valor novo para qualquer estatística e o total se atualiza na hora. Aceitam-se valores negativos e decimais."
        },
        {
          "question": "Onde as minhas regras personalizadas são salvas?",
          "answer": "No localStorage do seu navegador, um conjunto por esporte. Nunca saem do seu aparelho e são eliminadas se você apagar os dados do site."
        },
        {
          "question": "Como pontuo uma penalidade como um cartão vermelho?",
          "answer": "Atribua a essa estatística um valor de pontos negativo e depois digite quantas vezes ocorreu. O detalhamento mostra o subtotal em vermelho."
        },
        {
          "question": "Posso digitar uma quantidade negativa de uma estatística?",
          "answer": "Não. As quantidades devem ser zero ou mais. Use um valor de pontos negativo para as penalidades."
        },
        {
          "question": "Admite multiplicadores de capitão ou vice-capitão?",
          "answer": "Não de forma direta. Multiplique você o total final, por exemplo por 2 para um capitão, ou dimensione todas as regras pelo mesmo fator antes de digitar as estatísticas."
        },
        {
          "question": "Posso calcular uma equipe inteira?",
          "answer": "Pontue um jogador de cada vez, copie cada detalhamento e some os totais. Ainda não há um modo de equipe completa."
        },
        {
          "question": "É uma ferramenta de apostas?",
          "answer": "Não. Só faz aritmética com as estatísticas que você digita. Não dá odds, escolhas nem previsões."
        },
        {
          "question": "Por que o meu total é um decimal?",
          "answer": "Algumas regras, como 1,2 pontos por rebote ou 1,5 por assistência, produzem frações. Os totais são arredondados para duas casas decimais."
        },
        {
          "question": "Como pontuo um jogador que mudou de equipe no meio da semana?",
          "answer": "Use as estatísticas da partida que você está pontuando; a identidade da equipe não muda a aritmética."
        },
        {
          "question": "Posso salvar várias planilhas de pontuação?",
          "answer": "As regras personalizadas costumam ficar no armazenamento local deste navegador; exporte notas se precisar da mesma folha em outro lugar."
        },
        {
          "question": "As assistências e os gols são contados duas vezes alguma vez?",
          "answer": "Só se a folha da sua liga der os dois; digite cada categoria como as suas regras a definirem."
        },
        {
          "question": "Como devo tratar as partidas anuladas ou adiadas?",
          "answer": "Deixe essas estatísticas em zero até que os resultados oficiais sejam publicados e depois calcule de novo."
        },
        {
          "question": "A pontuação decimal admite meios pontos?",
          "answer": "Sim: digite valores fracionários quando a sua liga der 0,5 em categorias como chutes ou desarmes."
        },
        {
          "question": "A ferramenta distingue entre o banco e a escalação titular?",
          "answer": "Você escolhe quais jogadores digitar; ela não lê as escalações oficiais de forma automática."
        },
        {
          "question": "Como comparo rápido dois sistemas de pontuação?",
          "answer": "Passe as mesmas estatísticas em bruto por cada conjunto de regras e anote a diferença de totais."
        },
        {
          "question": "Os pontos defensivos são independentes do esporte?",
          "answer": "Os rótulos são genéricos: atribua as categorias de desarme, rebote ou wicket da sua liga aos campos que você editar."
        },
        {
          "question": "E se uma liga limitar os pontos de uma categoria?",
          "answer": "Aplique o teto à mão antes ou depois de digitar os dados para que o total respeite o regulamento."
        },
        {
          "question": "Posso usá-la para projeções de toda a temporada?",
          "answer": "Ela soma as estatísticas que você digita; as projeções precisam que você pressuponha as estatísticas de contagem como entradas."
        },
        {
          "question": "Ela se sincroniza com as APIs das ligas?",
          "answer": "Não: cole ou digite você as estatísticas para que as ligas privadas fiquem sem conexão."
        }
      ]
    }
  },
  "partial-pressure-calculator": {
    "answer": "A pressão parcial é a parte da pressão total que corresponde a um gás: Pᵢ = Xᵢ × P_total, onde Xᵢ é a sua fração molar. As pressões parciais de todos os gases de uma mistura somam a pressão total (lei de Dalton).",
    "metaDescription": "Calcule pressões parciais com a lei de Dalton a partir de frações molares, misturas ou o gás ideal, e converta entre atm, kPa, Pa, bar e mmHg.",
    "ui": {},
    "content": {
      "about": "Esta calculadora de pressão parcial aplica a lei de Dalton de quatro formas. Pode converter uma fração molar e uma pressão total em uma pressão parcial, repartir uma pressão total entre uma mistura de gases a partir das suas quantidades em mols, somar pressões parciais para obter um total, ou achar a pressão de um só gás com a lei dos gases ideais. Cada resposta aparece em atm, kPa, Pa, bar e mmHg, com o procedimento escrito passo a passo para que você possa conferir com um livro didático ou uma folha de laboratório.",
      "howTo": [
        "Escolha um modo: fração molar × total, mistura de gases, total a partir das parciais, ou gás ideal.",
        "Digite os valores desse modo. As frações molares são decimais de 0 a 1, as quantidades estão em mols e as temperaturas podem estar em kelvin ou em graus Celsius.",
        "Escolha a unidade de pressão com a qual você trabalha. O resultado é convertido automaticamente para as outras quatro unidades.",
        "Clique em Calcular, leia os passos e use Copiar resultado para colar a resposta e o procedimento nas suas notas. Limpar esvazia todos os campos."
      ],
      "examples": [
        {
          "title": "Oxigênio no ar seco ao nível do mar",
          "body": "O ar seco tem cerca de 20,95% de oxigênio em volume, então a sua fração molar é de uns 0,2095. Com uma pressão total de 1 atm, P(O₂) = 0,2095 × 1 atm = 0,2095 atm, que são 21,23 kPa ou 159,2 mmHg."
        },
        {
          "title": "Um cilindro com três gases",
          "body": "Um cilindro a 200 kPa contém 3,0 mol de nitrogênio, 1,5 mol de oxigênio e 0,5 mol de argônio, 5,0 mol no total. As frações molares são 0,60, 0,30 e 0,10, então as pressões parciais são 120 kPa, 60 kPa e 20 kPa. Elas somam de novo 200 kPa."
        },
        {
          "title": "Gás recolhido sobre a água",
          "body": "Recolhe-se hidrogênio sobre a água a 25 °C com uma pressão total de 755,0 mmHg. A pressão de vapor da água a 25 °C é de uns 23,8 mmHg, então a pressão do hidrogênio seco é 755,0 − 23,8 = 731,2 mmHg. Use o modo de total a partir das parciais ao contrário conferindo que 731,2 + 23,8 devolve 755,0 mmHg."
        },
        {
          "title": "Pressão de um gás ideal em um frasco",
          "body": "0,500 mol de gás a 25 °C em um frasco de 10,0 L: T = 298,15 K e V = 0,0100 m³, então P = 0,500 × 8,314462618 × 298,15 ÷ 0,0100 = 123.948 Pa, uns 124,0 kPa ou 1,223 atm."
        }
      ],
      "explanation": "A lei de Dalton das pressões parciais diz que, em uma mistura de gases que não reagem, cada gás empurra as paredes do recipiente como se estivesse sozinho, e a pressão total é a soma desses empurrões em separado. Como a pressão em uma mistura ideal é proporcional ao número de moléculas, a parte da pressão total de cada gás é igual à sua parte dos mols.",
      "features": [
        "Lei de Dalton a partir de uma fração molar, com uma conferência que recusa frações abaixo de 0 ou acima de 1.",
        "Um modo de mistura para até 10 gases que calcula cada fração molar e confirma que as frações somam 1.",
        "Pressão total a partir de até 10 pressões parciais.",
        "Pressão de um gás ideal a partir de n, T e V, com kelvin ou Celsius e litros ou metros cúbicos.",
        "Conversões exatas entre atm, kPa, Pa, bar e mmHg."
      ],
      "tips": [
        "Converta os percentuais em decimais antes de usar o modo de fração molar: 78% passa a 0,78.",
        "Em um gás recolhido sobre a água, subtraia do total a pressão de vapor da água na temperatura medida.",
        "Mantenha todas as pressões parciais na mesma unidade antes de somá-las.",
        "Use também kelvin nas suas próprias notas, porque P = nRT/V só funciona com temperatura absoluta."
      ],
      "limitations": "A calculadora pressupõe gases ideais que não reagem entre si. Não aplica correções de van der Waals nem outras de gases reais, não consulta pressões de vapor e não trata a solubilidade dos gases em líquidos (lei de Henry). Os resultados aparecem com seis algarismos significativos, o que pode ser mais precisão do que as suas medidas admitem, então arredonde a resposta final conforme os seus dados.",
      "sections": [
        {
          "heading": "Método de cálculo",
          "paragraphs": [
            "O modo de fração molar usa Pᵢ = Xᵢ × P_total. A fração deve ser de pelo menos 0 e não mais que 1, e a pressão total deve ser maior que zero.",
            "O modo de mistura soma primeiro os mols: n_total = n₁ + n₂ + … . Cada fração molar é Xᵢ = nᵢ ÷ n_total, e cada pressão parcial é Xᵢ × P_total. A ferramenta também soma as frações e mostra a soma, que deve ser 1 salvo pelo arredondamento.",
            "O modo de total usa P_total = P₁ + P₂ + … + Pₙ, com todos os valores na mesma unidade.",
            "O modo de gás ideal usa P = nRT ÷ V com R = 8,314462618 J/(mol·K). Os graus Celsius são convertidos com T(K) = T(°C) + 273,15, os litros são divididos por 1000 para obter metros cúbicos, e a resposta sai em pascals antes da conversão.",
            "A conversão de unidades passa pelos pascals: 1 atm = 101.325 Pa, 1 bar = 100.000 Pa, 1 kPa = 1000 Pa e 1 mmHg = 101.325 ÷ 760 Pa, uns 133,322 Pa. Os resultados são arredondados para seis algarismos significativos só para exibi-los."
          ]
        },
        {
          "heading": "Validação da fração molar",
          "paragraphs": [
            "Uma fração molar é uma proporção entre a parte e o total, então não pode ser negativa nem superar 1. Se você digitar um percentual como 21 em vez de 0,21, a calculadora para e pede um decimal, em vez de devolver uma pressão parcial 21 vezes maior que o total. No modo de mistura as frações são calculadas a partir dos mols, então sempre somam 1 e você não precisa normalizá-las."
          ]
        },
        {
          "heading": "Exemplo resolvido: gás respirável em profundidade",
          "paragraphs": [
            "Um mergulhador respira ar a 30 metros de água do mar, onde a pressão absoluta é de uns 4,0 bar. Com uma fração de oxigênio de 0,21, P(O₂) = 0,21 × 4,0 = 0,84 bar, e com uma fração de nitrogênio de 0,79, P(N₂) = 0,79 × 4,0 = 3,16 bar. As duas somam de novo 4,0 bar. É o mesmo cálculo que os planejadores de mergulho usam para conferir a exposição ao oxigênio, embora um planejamento real de imersão exija formação adequada, tabelas ou um computador de mergulho, não uma calculadora da web."
          ]
        },
        {
          "heading": "Erros habituais que convém evitar",
          "paragraphs": [
            "Misturar unidades é o erro mais frequente: somar um valor em kPa a um valor em mmHg dá um total sem sentido. Outro é usar os graus Celsius diretamente em P = nRT/V, o que inclusive pode dar uma pressão negativa. Um terceiro é esquecer que um gás recolhido sobre a água está úmido, então o total medido inclui o vapor de água."
          ]
        },
        {
          "heading": "Quando a lei de Dalton funciona bem",
          "paragraphs": [
            "A lei é muito precisa para gases a pressões e temperaturas normais, como o ar, as misturas respiráveis, os gases de combustão e a maioria dos problemas de aula. Ela perde exatidão a pressão alta ou temperatura baixa, onde as moléculas ocupam uma parte apreciável do volume e se atraem entre si, e em gases que reagem, se dissolvem ou se condensam."
          ]
        }
      ],
      "faqs": [
        {
          "question": "O que é a pressão parcial?",
          "answer": "É a pressão que um gás de uma mistura exerceria se preenchesse sozinho todo o recipiente na mesma temperatura."
        },
        {
          "question": "Qual é a fórmula da pressão parcial?",
          "answer": "Pᵢ = Xᵢ × P_total, onde Xᵢ é a fração molar do gás. Você também pode somar todas as pressões parciais para obter o total: P_total = P₁ + P₂ + … ."
        },
        {
          "question": "Como acho uma fração molar?",
          "answer": "Divida os mols de um gás pelo total de mols de todos os gases. O modo de mistura faz isso por você e mostra cada fração."
        },
        {
          "question": "Por que a calculadora recusa uma fração molar de 21?",
          "answer": "Uma fração molar deve estar entre 0 e 1. Se você quiser dizer 21%, digite 0,21."
        },
        {
          "question": "Que unidades de pressão são aceitas?",
          "answer": "atm, kPa, Pa, bar e mmHg. O torr é na prática igual ao mmHg para o trabalho cotidiano, já que 1 torr é exatamente 101.325 ÷ 760 Pa."
        },
        {
          "question": "Posso usar Celsius no modo de gás ideal?",
          "answer": "Sim. Escolha °C e a ferramenta soma 273,15 antes de calcular. Temperaturas no zero absoluto ou abaixo são recusadas."
        },
        {
          "question": "Que valor de R a ferramenta usa?",
          "answer": "8,314462618 J/(mol·K), o valor exato do SI definido desde 2019, com o volume em metros cúbicos e a pressão em pascals."
        },
        {
          "question": "A lei de Dalton funciona com gases reais?",
          "answer": "É uma aproximação muito boa a pressões cotidianas. Em pressão alta ou perto da condensação, o comportamento de gás real causa pequenas diferenças que esta ferramenta não modela."
        },
        {
          "question": "Quantos gases posso adicionar?",
          "answer": "Até 10 nos modos de mistura e de total, o que cobre quase todos os problemas de tarefas, laboratório e mergulho."
        },
        {
          "question": "Como converto resultados em mmHg para kPa?",
          "answer": "Divida os mmHg por 7,5006 para um valor aproximado em kPa, ou mude a unidade da ferramenta antes de calcular."
        },
        {
          "question": "Posso misturar frações molares que não somem 1?",
          "answer": "Elas devem somar 1 em uma mistura completa; corrija primeiro a composição se o total se desviar."
        },
        {
          "question": "Quando o modo de gás ideal é adequado?",
          "answer": "Use-o para gases diluídos perto de temperaturas e pressões normais; os gases densos ou polares precisam de correções."
        },
        {
          "question": "Como o vapor de água afeta as pressões parciais do gás seco?",
          "answer": "Subtraia a pressão de vapor da pressão total quando precisar das frações molares do gás seco."
        },
        {
          "question": "Posso calcular a fração molar a partir de uma pressão parcial conhecida?",
          "answer": "Divida a pressão parcial pela pressão total quando a lei de Dalton se cumprir."
        },
        {
          "question": "Por que subir a temperatura mudou o resultado do gás ideal?",
          "answer": "O modo de gás ideal usa as relações de PV = nRT: a temperatura muda a pressão calculada quando a quantidade e o volume são fixos."
        },
        {
          "question": "Digito pressão manométrica ou absoluta?",
          "answer": "A lei de Dalton precisa da pressão total absoluta; converta as leituras manométricas somando a pressão atmosférica."
        },
        {
          "question": "Quantas casas decimais os relatórios de laboratório devem conservar?",
          "answer": "Ajuste-as à precisão do seu instrumento; evite uma exatidão falsa além da pressão total medida."
        },
        {
          "question": "O percentual em volume é a mesma coisa que o percentual molar nos gases ideais?",
          "answer": "Sim, com as hipóteses de gás ideal na mesma T e P; os gases reais podem se desviar."
        },
        {
          "question": "Gases dissolvidos em líquidos podem ser usados com esta ferramenta?",
          "answer": "Não: a lei de Henry e as solubilidades são diferentes das pressões parciais de uma mistura de gases."
        },
        {
          "question": "E se um componente for um vapor condensável?",
          "answer": "Fique de olho nos limites de saturação; a condensação significa que o modelo simples de mistura de gases deixa de valer."
        }
      ]
    }
  },
  "graduation-calculator-by-birthday": {
    "answer": "Ache o primeiro ano em que uma criança atinge a idade de ingresso na data-limite e depois some os anos de escola menos um. Com 5 anos em 1º de setembro e 13 anos de estudo, uma criança nascida em 20 de agosto de 2020 se forma em junho de 2038.",
    "metaDescription": "Estime o início escolar e o ano de formatura a partir da data de nascimento, com a idade de ingresso, a data-limite, o calendário e os anos de estudo.",
    "ui": {},
    "content": {
      "about": "Esta calculadora de formatura por data de nascimento calcula quando é provável que uma criança comece a escola e o ano em que terminaria, com as regras que você mesmo define em vez de adivinhar. Você digita uma data de nascimento, a idade que a criança deve ter atingido em uma data-limite, o mês em que começa e termina o ano letivo, e quantos anos dura a escola. A calculadora mostra então o primeiro ano escolar, cada marco e o ano de formatura, mais o fim dos anos de faculdade ou de estudos posteriores que você acrescentar. Se o estudante já estiver na escola, você pode digitar o ano atual dele e contar para frente a partir daí. Cada pressuposto do qual a resposta depende aparece junto ao resultado.",
      "howTo": [
        "Digite a data de nascimento.",
        "Defina a idade de ingresso escolar e a data-limite que o seu distrito, estado ou país usa. Os valores padrão são 5 anos em 1º de setembro, um ano letivo de setembro a junho e 13 anos de escola, o que coincide com muitos sistemas de kindergarten ao 12º ano dos Estados Unidos.",
        "Mude o número de anos de escola e acrescente qualquer ano de estudo posterior, como 4 para um bacharelado.",
        "Se o estudante já estiver matriculado, marque a opção de nível atual e digite o ano de início deste ano letivo e o número do ano atual dele.",
        "Clique em Calcular ano de formatura, leia os cartões da cronologia e os pressupostos, e copie a cronologia se precisar."
      ],
      "examples": [
        {
          "title": "Nascido justamente antes de uma data-limite de 1º de setembro",
          "body": "Uma criança nascida em 20 de agosto de 2020 completa 5 anos em 20 de agosto de 2025, antes da data-limite de 1º de setembro, então começa a escola no ano letivo 2025–26. Com 13 anos de escola, o ano final é 2037–38 e a formatura é em junho de 2038."
        },
        {
          "title": "Nascido no dia seguinte à data-limite",
          "body": "Uma criança nascida em 2 de setembro de 2015 ainda tem 4 anos em 1º de setembro de 2020, então a calculadora move o ingresso para 2021–22. Treze anos depois, o ano final é 2033–34 e a formatura é em junho de 2034, um ano mais tarde que uma criança nascida um só dia antes."
        },
        {
          "title": "Um sistema escolar de ano-calendário",
          "body": "Defina o ano letivo para que comece em janeiro e termine em dezembro, a data-limite em 30 de junho, a idade de ingresso em 5 e 12 anos de escola. Uma criança nascida em 10 de março de 2015 tem 5 anos em 30 de junho de 2020, então a escola começa em 2020 e o ano final é 2031, com formatura em dezembro de 2031."
        },
        {
          "title": "Já está na escola",
          "body": "Um estudante no ano 6 durante o ano letivo que começa em setembro de 2026, em um sistema de 13 anos, começou em 2021–22 e termina em junho de 2034. Acrescentar 4 anos de faculdade situa a conclusão prevista do diploma em 2038."
        }
      ],
      "explanation": "As regras de ingresso escolar costumam ser redigidas como uma idade em uma data: uma criança pode começar se tiver atingido certa idade na data-limite ou antes. A calculadora confere cada ano por vez e escolhe o primeiro ano em que a idade da criança na data-limite daquele ano é pelo menos a idade de ingresso. A partir daí, a formatura é questão de contar anos letivos.",
      "features": [
        "Idade de ingresso e dia e mês da data-limite configuráveis.",
        "Anos letivos que abrangem dois anos-calendário, rotulados como 2030–31, ou que cabem em um só ano-calendário.",
        "Modo opcional de nível atual para estudantes que já estão na escola.",
        "Durações à parte da escola e dos estudos posteriores.",
        "Cartões de cronologia com o ano letivo, o mês de fim e a idade do estudante naquele momento.",
        "Os aniversários em dia bissexto são tratados de forma explícita."
      ],
      "tips": [
        "Consulte a idade de ingresso e a data-limite da sua rede de ensino na página de matrícula antes de confiar no resultado.",
        "Conte com cuidado os anos que você quer incluir: 13 para o sistema K–12 dos Estados Unidos, 12 se começar no 1º ano.",
        "Use o modo de nível atual para estudantes que repetiram um ano ou foram adiantados.",
        "Execute a calculadora duas vezes com datas-limite diferentes se uma família puder se mudar entre sistemas."
      ],
      "limitations": "A ferramenta não conhece a política real de nenhuma escola. Não modela avaliações de ingresso antecipado, atrasos voluntários, pulos de série, anos repetidos, anos sabáticos, estudo em tempo parcial nem ingressos no meio do ano. Os anos de estudo posterior são contados como anos letivos completos com o mesmo padrão de calendário que a escola. As datas são datas de calendário sem fusos horários, e o resultado é uma estimativa para planejar, não uma decisão de matrícula.",
      "sections": [
        {
          "heading": "Método de cálculo",
          "paragraphs": [
            "A idade em uma data é a diferença em anos, menos um se o aniversário ainda não ocorreu naquele ano. Um aniversário na data-limite conta como atingido. Um aniversário de 29 de fevereiro é tratado como atingido em 1º de março nos anos sem dia bissexto, que é a convenção legal habitual, e uma data-limite de 29 de fevereiro passa para 28 de fevereiro nesses anos.",
            "Ano de ingresso: o primeiro ano-calendário Y para o qual a idade na data-limite de Y é pelo menos a idade de ingresso. Quando o ano letivo começa em um mês posterior à data-limite, como com uma data-limite de 1º de setembro e um início em setembro, esse ano letivo começa em Y. O ano letivo é rotulado Y–(Y+1) quando o mês de fim vem antes do mês de início, e só Y quando não é assim.",
            "Formatura escolar: o último ano escolar começa em Y + anos de escola − 1, e a formatura ocorre no mês de fim dele, que cai no ano-calendário seguinte se o ano estiver partido. Os estudos posteriores, quando você os acrescenta, terminam esse número de anos letivos mais tarde.",
            "O modo de nível atual trabalha para trás e para frente a partir do ano que você digita: o ano de ingresso é o ano de início atual menos (número de ano atual − 1), e a formatura se conta para frente a partir daí. Neste modo não se usa a regra de ingresso, o que convém a estudantes que começaram cedo, repetiram um ano ou pularam um ano."
          ]
        },
        {
          "heading": "Pressupostos que aparecem com cada resultado",
          "paragraphs": [
            "A calculadora enumera a idade de ingresso, a data-limite, o calendário letivo, o número de anos e se o nível atual foi usado. Estes são dados de entrada, não fatos sobre uma escola concreta. Se algum diferir na sua rede, mude o dado e calcule de novo."
          ]
        },
        {
          "heading": "Por que as regras diferem",
          "paragraphs": [
            "As idades de ingresso e as datas-limite variam entre países, estados e às vezes redes de ensino. Alguns sistemas contam a partir de um ano de educação infantil e outros a partir de um 1º ano ou de uma classe de recepção, e alguns permitem um ingresso antecipado ou atrasado. As escolas do hemisfério norte costumam começar em agosto ou setembro, enquanto muitos sistemas do hemisfério sul começam em janeiro ou fevereiro. Em vez de guardar regras de todos os sistemas, que mudam com o tempo, esta ferramenta deixa você digitar a regra que se aplica a você e rotula o resultado com esses ajustes."
          ]
        }
      ],
      "faqs": [
        {
          "question": "Como calculo o ano de formatura do meu filho a partir da data de nascimento dele?",
          "answer": "Ache o primeiro ano em que ele completa a idade de ingresso na data-limite e depois some o número de anos de escola menos um para obter o ano final. Esta calculadora faz os dois passos e mostra o resultado."
        },
        {
          "question": "Que data-limite devo usar?",
          "answer": "Use a data que o seu distrito ou país publica para o ingresso escolar. 1º de setembro é habitual nos Estados Unidos, mas em muitos lugares se usam outras datas, então consulte a página oficial de matrícula."
        },
        {
          "question": "E se o aniversário cair exatamente na data-limite?",
          "answer": "Considera-se que a criança atingiu a idade nesse dia, então ela ingressa naquele ano."
        },
        {
          "question": "Como são tratados os aniversários de 29 de fevereiro?",
          "answer": "Nos anos sem 29 de fevereiro, o aniversário é tratado como 1º de março. Por isso, uma data-limite de 28 de fevereiro não conta uma criança nascida em 29 de fevereiro como um ano mais velha até o dia seguinte."
        },
        {
          "question": "Por que o ano de formatura difere do ano da turma da minha escola?",
          "answer": "A sua escola pode usar outra idade de ingresso, data-limite, número de anos ou calendário. Ajuste esses dados, ou use a opção de nível atual se o estudante já estiver matriculado."
        },
        {
          "question": "Posso usá-la em países fora dos Estados Unidos?",
          "answer": "Sim. Defina a idade de ingresso, a data-limite, os meses de início e fim do ano letivo e o número de anos para que coincidam com o seu sistema."
        },
        {
          "question": "O que significa um rótulo de ano letivo como 2030–31?",
          "answer": "É um ano escolar que começa em um ano-calendário e termina no seguinte, como de setembro de 2030 a junho de 2031."
        },
        {
          "question": "Pode incluir a faculdade?",
          "answer": "Sim. Digite o número de anos de estudo posterior e a cronologia acrescenta um cartão final para quando esses estudos terminariam."
        },
        {
          "question": "O resultado está garantido?",
          "answer": "Não. É uma estimativa para planejar baseada nos dados que você dá. As escolas decidem a colocação, e as políticas mudam."
        },
        {
          "question": "Como as decisões de atrasar o kindergarten mudam o resultado?",
          "answer": "Atrasar o kindergarten desloca para frente cada ano posterior de formatura; ajuste o ano de início para que coincida com o atraso."
        },
        {
          "question": "Devo usar a data-limite publicada da escola ou o valor padrão do estado?",
          "answer": "Prefira a data-limite da rede ou da escola quando publicarem uma; os valores padrão do estado são só um respaldo."
        },
        {
          "question": "Os aniversários de verão podem cair em turmas diferentes conforme a rede?",
          "answer": "Sim: as diferenças no mês da data-limite movem as crianças de julho e agosto entre anos de turma."
        },
        {
          "question": "A ferramenta pressupõe um percurso K–12 de 12 anos?",
          "answer": "Modelam-se percursos típicos dos Estados Unidos; confirme se o seu sistema usa estruturas de anos intermediários ou séries repetidas."
        },
        {
          "question": "Como os pulos de série afetam o ano de formatura?",
          "answer": "Pular uma série costuma adiantar a formatura em um ano: desloque o resultado em conformidade."
        },
        {
          "question": "E se o meu filho primeiro frequentou a escola no exterior?",
          "answer": "Associe a idade dele à série de ingresso local e depois projete para frente com as datas-limite do novo sistema."
        },
        {
          "question": "Percursos de GED ou de faculdade antecipada são cobertos?",
          "answer": "Não: essas cronologias alternativas precisam da orientação de um conselheiro, além da aritmética da data de nascimento."
        },
        {
          "question": "Posso estimar o ano da turma universitária a partir da mesma data de nascimento?",
          "answer": "Some quatro anos depois da formatura do ensino médio para um percurso típico de bacharelado, sabendo que as transferências variam."
        },
        {
          "question": "Por que em casos raros os gêmeos poderiam ter rótulos diferentes?",
          "answer": "As datas de nascimento idênticas compartilham turma; um início atrasado diferente na educação infantil é uma decisão familiar, não da calculadora."
        },
        {
          "question": "O rótulo do ano letivo inclui a escola de verão?",
          "answer": "Os rótulos marcam o intervalo do ano escolar; as sessões de verão em geral não mudam sozinhas o ano da turma."
        },
        {
          "question": "Como se devem tratar as transferências no meio do ano?",
          "answer": "Pergunte à nova escola em que turma ela coloca o estudante: a política prevalece sobre uma regra genérica de data de nascimento."
        }
      ]
    }
  },
  "unemployment-benefits-calculator": {
    "answer": "A maioria dos estados baseia o pagamento semanal de desemprego no seu trimestre de maiores rendimentos, dividido por uma cifra fixa e com um teto. Esta estimativa cobre só a Califórnia, Nova York, o Texas e a Flórida, com fontes oficiais; a agência estadual decide o valor real.",
    "metaDescription": "Estime o benefício semanal e o total do pedido na Califórnia, em Nova York, no Texas e na Flórida, com a fórmula e as fontes de cada estado.",
    "ui": {},
    "content": {
      "about": "Esta calculadora de benefícios de desemprego estima um benefício semanal ordinário e o máximo que você poderia receber em um pedido, usando a fórmula publicada do estado que você escolher. Só cobre os estados cujas regras verificamos nas próprias páginas da agência estadual: Califórnia, Nova York, Texas e Flórida. Cada um mostra a sua fórmula, os seus valores semanais mínimo e máximo, os seus links para as fontes e a data em que as regras foram conferidas pela última vez. Se você escolher qualquer outro estado, a calculadora indica com clareza que ele ainda não é admitido e o encaminha ao diretório oficial de agências, em vez de adivinhar. Toda a operação roda no seu navegador, e o resultado é uma estimativa, não uma decisão sobre o seu pedido. Esta ferramenta modela o seguro-desemprego dos Estados Unidos, não o seguro-desemprego brasileiro.",
      "howTo": [
        "Escolha o seu estado. Só se podem calcular os estados conferidos; os demais mostram uma mensagem de não admitido.",
        "Busque os salários do período-base. A maioria dos estados usa os primeiros quatro dos últimos cinco trimestres civis completos antes de apresentar o pedido. Os seus holerites, os formulários W-2 ou a carta de determinação monetária do estado recolhem esses valores.",
        "Digite os salários brutos de cada um dos quatro trimestres, antes dos impostos. Use 0 em um trimestre sem rendimentos. A ordem não importa, porque a calculadora encontra o trimestre mais alto.",
        "Clique em Estimar benefícios. Leia o valor semanal, o total do pedido, o número de semanas e cada passo da fórmula.",
        "Compare a estimativa com o aviso oficial que você receber depois de apresentar o pedido, que é a cifra que o estado realmente pagará."
      ],
      "examples": [
        {
          "title": "Califórnia: um trabalhador em tempo parcial durante parte do ano",
          "body": "Salários do período-base de US$ 5.200, US$ 0, US$ 0 e US$ 0 dão um trimestre alto de US$ 5.200. A tabela da Califórnia equivale, neste nível, ao trimestre alto ÷ 26, então o valor semanal é US$ 200. O total do pedido é o menor entre 26 × US$ 200 = US$ 5.200 ou a metade dos salários do período-base, US$ 2.600, então o pedido vale US$ 2.600, umas 13 semanas."
        },
        {
          "title": "Califórnia: alcançar o máximo",
          "body": "Trimestres de US$ 12.000, US$ 11.000, US$ 9.000 e US$ 8.000 dão US$ 12.000 ÷ 26 = US$ 462, que está acima do máximo de US$ 450, então o valor semanal é US$ 450. A metade do período-base de US$ 40.000 é mais que 26 × US$ 450 = US$ 11.700, então estão disponíveis as 26 semanas completas."
        },
        {
          "title": "Nova York: salários nos quatro trimestres",
          "body": "Trimestres de US$ 9.100, US$ 8.000, US$ 7.000 e US$ 6.000 dão um trimestre alto de US$ 9.100, que supera os US$ 3.575, então o valor semanal é US$ 9.100 ÷ 26 = US$ 350, abaixo do máximo de US$ 869. Até 26 semanas dão US$ 9.100 no total."
        },
        {
          "title": "Texas: o limite de 27%",
          "body": "Trimestres de US$ 10.000, US$ 8.000, US$ 7.000 e US$ 5.000: US$ 10.000 ÷ 25 = US$ 400 por semana. O total do pedido é o menor entre 26 × US$ 400 = US$ 10.400 ou 27% de US$ 30.000 = US$ 8.100, então o pedido é de US$ 8.100, um pouco mais de 20 semanas de pagamentos completos."
        },
        {
          "title": "Flórida: o próprio exemplo da agência",
          "body": "A FAQ para solicitantes da FloridaCommerce usa trimestres de US$ 0, US$ 6.317,03, US$ 4.712,63 e US$ 765,17. O trimestre alto ÷ 26 é US$ 242,96, arredondado para baixo para US$ 242. O total do pedido é o menor entre 25% de US$ 11.794,83, que é US$ 2.948, ou US$ 3.300, então o pedido é de US$ 2.948."
        }
      ],
      "explanation": "Cada estado paga o seguro-desemprego conforme a sua própria lei, então não há uma só fórmula nacional. A maioria parte dos seus salários em um período-base de quatro trimestres civis e fixa o valor semanal a partir do seu melhor trimestre; depois aplica um piso e um teto. Muitos também limitam o total que você pode receber em um pedido. A calculadora segue, passo a passo, o método publicado de cada estado admitido.",
      "features": [
        "Fórmulas por estado para a Califórnia, Nova York, o Texas e a Flórida, cada uma com links para fontes oficiais e uma data da última conferência.",
        "Conferências de elegibilidade monetária conforme os testes de salários que cada estado publica.",
        "Valores semanais mínimo e máximo aplicados de forma automática, com um passo que indica quando se usou um teto.",
        "O total do pedido e o número de semanas completas que ele cobre.",
        "Uma mensagem clara de não admitido para qualquer outro estado e para o Distrito de Columbia."
      ],
      "tips": [
        "Use os salários brutos dos trimestres que o estado emprega, não o salário que resta na sua mão.",
        "Se você trabalhou em mais de um estado, entre em contato com as agências; os salários podem ser combinados em um só pedido.",
        "Apresente o pedido assim que ficar sem trabalho. A estimativa não é um pedido, e a maioria dos estados não paga nada pelas semanas anteriores à apresentação.",
        "Conserve a carta de determinação monetária. Se os seus salários aparecerem errados, a carta explica como pedir uma correção."
      ],
      "limitations": "Só estão admitidos a Califórnia, Nova York, o Texas e a Flórida, com regras conferidas em 2 de novembro de 2026. A calculadora modela unicamente a fórmula monetária dos benefícios estaduais ordinários. Não decide a elegibilidade, não aplica regras não monetárias, não inclui rendimentos de semanas parciais, deduções, impostos, pagamentos em excesso nem programas ampliados, nem faz um acompanhamento das mudanças legais posteriores à data da última conferência. As fontes de Nova York mostram pisos ligeiramente distintos em documentos distintos, então a ferramenta aplica o piso publicado de US$ 143 para os métodos de ÷ 26 e um mínimo geral de US$ 140. Aviso: esta é uma estimativa educativa, não um aconselhamento jurídico nem financeiro. Só a agência de desemprego do seu estado pode determinar se você cumpre os requisitos e quanto receberá.",
      "sections": [
        {
          "heading": "Método de cálculo por estado",
          "paragraphs": [
            "Califórnia (EDD). Para se qualificar você precisa de pelo menos US$ 1.300 no trimestre alto, ou pelo menos US$ 900 no trimestre alto com salários totais do período-base de pelo menos 1,25 vezes esse trimestre. Abaixo de US$ 1.833 de salários do trimestre alto, o valor semanal se lê na tabela de benefícios do EDD. A partir de US$ 1.833 equivale ao trimestre alto ÷ 26, arredondado para cima para um dólar inteiro. O valor semanal se mantém entre US$ 40 e US$ 450. O total do pedido é o menor entre 26 × o valor semanal ou a metade dos salários do período-base.",
            "Nova York (Department of Labor). Para os pedidos apresentados em 2026 você precisa de salários em pelo menos dois trimestres, pelo menos US$ 3.500 em um trimestre, e salários totais de pelo menos 1,5 vezes o trimestre alto. Se o trimestre alto for de US$ 19.118 ou mais, os outros três trimestres devem somar pelo menos US$ 9.559 no lugar disso. Com salários nos quatro trimestres, o valor semanal é o trimestre alto ÷ 26 quando o trimestre alto supera os US$ 3.575, ou ÷ 25 quando é de US$ 3.575 ou menos. Com salários em só dois ou três trimestres e um trimestre alto de mais de US$ 4.000, é a média dos dois trimestres mais altos ÷ 26. O valor se mantém entre US$ 140 e US$ 869, e se podem pagar até 26 semanas.",
            "Texas (TWC). O valor semanal é o trimestre alto ÷ 25, arredondado para o dólar mais próximo, e se mantém entre US$ 76 e US$ 619 para os pedidos com efeito a partir de 4 de outubro de 2026. O total do pedido é o menor entre 26 × o valor semanal ou 27% dos salários do período-base.",
            "Flórida (FloridaCommerce). Você precisa de salários em pelo menos dois trimestres, pelo menos US$ 3.400 no período-base, e salários totais de pelo menos 1,5 vezes o trimestre alto. O valor semanal é o trimestre alto ÷ 26, arredondado para baixo, e se mantém entre US$ 32 e US$ 275. O total do pedido é o menor entre 25% dos salários do período-base ou US$ 3.300, e os pedidos apresentados em 2025 e 2026 duram até 12 semanas. A Flórida fixa essa duração cada ano a partir da taxa de desemprego estadual, entre 12 e 23 semanas.",
            "Quando se acharam o valor semanal e o total do pedido, o número de semanas completas que se mostra é o total do pedido ÷ o valor semanal, arredondado para baixo e limitado ao número máximo de semanas do estado."
          ]
        },
        {
          "heading": "Período-base e período-base alternativo",
          "paragraphs": [
            "O período-base é a janela de rendimentos que o estado examina. Para um pedido apresentado em novembro de 2026, o período-base habitual nestes quatro estados vai de 1º de julho de 2025 a 30 de junho de 2026, porque se omite o trimestre completo mais recente (julho a setembro de 2026). A Califórnia e Nova York também oferecem um período-base alternativo dos últimos quatro trimestres completos se você não se qualificar com o habitual. Digite o conjunto de quatro trimestres que o estado usou ou usará no seu caso."
          ]
        },
        {
          "heading": "O que a estimativa deixa de fora",
          "paragraphs": [
            "A elegibilidade monetária é só a metade de um pedido. Os estados também conferem por que você ficou sem trabalho, se está em condições e disponível para trabalhar, e se busca trabalho toda semana. Uma separação por má conduta ou um pedido de demissão sem uma causa justificada podem levar a uma recusa mesmo quando os salários são suficientemente altos. Os rendimentos parciais enquanto você recebe, a indenização rescisória, as pensões e outros rendimentos podem reduzir os pagamentos semanais. Os benefícios são renda federal tributável, e alguns estados retêm o imposto estadual se você pedir.",
            "Não se incluem os programas ampliados ou de emergência, que só estão disponíveis em algumas condições econômicas. Tampouco as regras de horas de desemprego parcial de Nova York, o seguro de invalidez da Califórnia nem qualquer outro programa gerido pelas mesmas agências."
          ]
        },
        {
          "heading": "Por que ainda não se admitem outros estados",
          "paragraphs": [
            "A fórmula, o mínimo, o máximo e a duração de cada estado podem mudar por lei ou por um ajuste anual, às vezes mais de uma vez por ano. Alguns estados acrescentam complementos por dependentes ou usam médias de vários trimestres. Publicar uma cifra de um estado que não conferimos poderia induzir a erro quem estiver decidindo como orçar, então a calculadora só cobre os estados cujas páginas oficiais lemos e registramos com uma data. Mais estados serão acrescentados só depois da mesma conferência."
          ]
        },
        {
          "heading": "Como as regras se mantêm atualizadas",
          "paragraphs": [
            "Cada estado admitido guarda a sua agência, fórmula, valores semanais mínimo e máximo, duração, data de entrada em vigor, URL das fontes e a data da última conferência. Esses detalhes aparecem sob o formulário do estado que você selecionar, para que você possa abrir a fonte e confirmar as cifras você mesmo. Se uma cifra do site da agência diferir da que aparece aqui, a cifra da agência é a correta."
          ]
        }
      ],
      "faqs": [
        {
          "question": "Como se calcula o meu benefício semanal de desemprego?",
          "answer": "A maioria dos estados toma o seu trimestre de maiores rendimentos do período-base e o divide por um número fixo, como 25 ou 26, e depois aplica um mínimo e um máximo. A fórmula varia conforme o estado, então escolha o seu para ver os passos exatos."
        },
        {
          "question": "Que estados esta calculadora admite?",
          "answer": "A Califórnia, Nova York, o Texas e a Flórida. Cada um foi conferido com as próprias páginas da agência estadual, e os links para as fontes e a data da última conferência aparecem sob o formulário."
        },
        {
          "question": "Por que o meu estado não é admitido?",
          "answer": "Só publicamos os estados cujas regras vigentes verificamos em fontes oficiais. Para qualquer outro estado, use o estimador da própria agência ou ligue para a agência. O CareerOneStop lista todas as agências estaduais."
        },
        {
          "question": "Qual é o benefício semanal máximo nestes estados?",
          "answer": "Conforme a última conferência: Califórnia US$ 450, Nova York US$ 869, Texas US$ 619 (pedidos com efeito a partir de 4 de outubro de 2026) e Flórida US$ 275."
        },
        {
          "question": "Durante quantas semanas posso receber benefícios?",
          "answer": "Até 26 semanas na Califórnia, em Nova York e no Texas, sujeito ao limite do total do pedido de cada estado, e 12 semanas para os pedidos da Flórida apresentados em 2025 ou 2026."
        },
        {
          "question": "Que salários devo digitar?",
          "answer": "Os salários brutos de cada trimestre do período-base, em geral os primeiros quatro dos últimos cinco trimestres civis completos antes de apresentar o pedido."
        },
        {
          "question": "A estimativa inclui impostos?",
          "answer": "Não. Os benefícios de desemprego são renda federal tributável. A estimativa é o valor bruto, antes de qualquer retenção."
        },
        {
          "question": "Por que a estimativa diz que talvez eu não me qualifique?",
          "answer": "Os salários que você digitou não cumpriram um dos testes de salários publicados pelo estado. A mensagem nomeia o teste. Ainda assim você pode se qualificar com um período-base alternativo, então consulte a agência."
        },
        {
          "question": "Esta estimativa é oficial?",
          "answer": "Não. É uma estimativa educativa. A agência estadual emite a determinação oficial depois que você apresenta um pedido."
        },
        {
          "question": "Os meus salários são enviados a algum lugar?",
          "answer": "Não. O cálculo roda no seu navegador e nada do que você digita é guardado nem enviado a um servidor."
        },
        {
          "question": "O que é um período-base nos pedidos de desemprego?",
          "answer": "É a janela de salários passados que o seu estado usa para avaliar a elegibilidade monetária: muitas vezes os primeiros quatro dos últimos cinco trimestres completos."
        },
        {
          "question": "Os pagamentos de indenização atrasam os benefícios?",
          "answer": "Alguns estados adiam semanas enquanto a indenização cobre salários; consulte as regras locais além desta estimativa."
        },
        {
          "question": "Como devo digitar rendimentos de trabalho esporádico ou do formulário 1099?",
          "answer": "Inclua só os salários que o seu estado conta para o seguro-desemprego; os rendimentos de prestadores muitas vezes ficam de fora, salvo se estiverem cobertos de forma especial."
        },
        {
          "question": "Um emprego parcial pode reduzir o valor semanal?",
          "answer": "Sim: muitos estados subtraem os rendimentos acima de uma franquia; declare o trabalho como se exige quando apresentar o pedido."
        },
        {
          "question": "Por que os dependentes mudam algumas fórmulas estaduais?",
          "answer": "Alguns programas acrescentam complementos por dependentes; se o seu estado os admitir, a estimativa reflete esse conjunto de regras."
        },
        {
          "question": "O benefício semanal máximo é um teto firme?",
          "answer": "Sim, nos estados enumerados: os valores baseados nos rendimentos deixam de subir quando chegam ao teto legal."
        },
        {
          "question": "Quão precisa é uma comparação entre vários estados?",
          "answer": "As fórmulas diferem; use-a para um planejamento aproximado e depois confirme com a agência onde apresentar o pedido."
        },
        {
          "question": "Devo digitar os holerites brutos ou líquidos?",
          "answer": "Use os salários brutos que o empregador declarou para efeitos do imposto do seguro-desemprego, não o salário que resta na sua mão."
        },
        {
          "question": "As semanas de espera aparecem na calculadora?",
          "answer": "Alguns estados impõem uma semana de espera não remunerada; os campos de duração indicam as semanas pagáveis habituais, não todos os atrasos de trâmite."
        },
        {
          "question": "Posso recorrer se a estimativa não coincidir com o meu aviso?",
          "answer": "Siga as instruções de recurso da sua carta de determinação: a ferramenta é educativa, não uma decisão legal."
        }
      ]
    }
  },
  "tdee-calculator": {
    "answer": "Uma calculadora de TDEE estima o gasto calórico diário a partir da idade, do sexo, da altura, do peso e da atividade. Esta usa Mifflin–St Jeor para a TMB (BMR), multiplica-a por um fator de atividade e depois mostra metas para manter, perder ou ganhar peso, com macros sugeridos.",
    "metaDescription": "Calculadora TDEE grátis com TMB Mifflin–St Jeor, cinco níveis de atividade e metas de calorias para manter, perder ou ganhar peso, com macros sugeridos.",
    "ui": {},
    "content": {
      "about": "Esta calculadora TDEE grátis estima quantas calorias você queima em um dia a partir da sua idade, sexo, altura, peso e atividade. Ela usa a equação de Mifflin–St Jeor por padrão para a taxa metabólica basal (TMB ou BMR), multiplica-a por um fator de atividade padrão para obter o gasto energético total diário (TDEE) e depois mostra metas calóricas de manutenção, perda e ganho de peso, com uma distribuição sugerida de proteínas, carboidratos e gorduras. Se você já conhece o seu percentual de gordura corporal, pode escolher de forma opcional a fórmula de Katch–McArdle. Tudo roda no seu navegador.",
      "howTo": [
        "Escolha o sistema métrico (kg, cm) ou o imperial (lb, pés e polegadas).",
        "Selecione o sexo, digite a idade, o peso e a altura, e escolha um dos cinco níveis de atividade que melhor coincida com a sua semana.",
        "Escolha Manter peso, Perder peso ou Ganhar peso.",
        "Clique em Calcular para ver a TMB, o TDEE, as metas calóricas e os macros sugeridos. Use Copiar resultados ou Compartilhar resultados para guardá-los, ou Redefinir para esvaziar o formulário."
      ],
      "examples": [
        {
          "title": "Trabalhador de escritório sedentário, homem, 30 anos",
          "body": "Homem, 30 anos, 80 kg, 180 cm, sedentário (×1,2). A TMB é de umas 1780 kcal. O TDEE é de umas 2136 kcal. Desse TDEE derivam-se uma meta de perda próxima de 1636 kcal e uma de ganho próxima de 2436 kcal."
        },
        {
          "title": "Mulher moderadamente ativa, unidades imperiais",
          "body": "Mulher, 28 anos, 140 lb, 5′6″, moderadamente ativa (×1,55). A calculadora converte para o sistema métrico, calcula a TMB de Mifflin–St Jeor, multiplica-a por 1,55 para o TDEE e depois mostra as calorias para manter, perder e ganhar peso, com um modelo de macros 30/40/30 sobre a meta selecionada."
        },
        {
          "title": "Pessoa muito ativa que busca ganhar peso",
          "body": "Escolher Muito ativo (×1,725) ou Extra-ativo (×1,9) sobe o TDEE. Com Ganhar peso selecionado, as calorias da meta equivalem ao TDEE mais umas 300 kcal, e as barras de macros se atualizam para essa meta mais alta."
        }
      ],
      "explanation": "A TMB é a energia que o seu corpo usa em repouso total. Mifflin–St Jeor a estima a partir do peso, da altura, da idade e do sexo. O TDEE multiplica a TMB por um fator de atividade para incluir o movimento diário e o treino. As calorias de manutenção equivalem ao TDEE. Um déficit habitual para uma perda gradual é de umas 500 kcal por dia; um superávit moderado para ganhar é de umas 300 kcal. Os macros sugeridos aqui atribuem 30% das calorias da meta a proteínas, 40% a carboidratos e 30% a gorduras.",
      "features": [
        "TMB Mifflin–St Jeor com entradas métricas e imperiais.",
        "Cinco multiplicadores de atividade, de sedentário a extra-ativo.",
        "Metas calóricas para manter, perder e ganhar peso, com destaque da meta escolhida.",
        "Gramas sugeridos de proteínas, carboidratos e gorduras, mais barras de percentuais.",
        "Uma linha de fórmula em linguagem clara que mostra como a TMB e o TDEE foram montados.",
        "Os controles Calcular, Redefinir, Copiar resultados e Compartilhar resultados fazem um trabalho real."
      ],
      "tips": [
        "Ajuste o nível de atividade a uma semana típica, não ao seu dia de treino mais duro.",
        "Calcule de novo depois de uma mudança importante de peso ou de rotina.",
        "Use as metas de perda e de ganho como pontos de partida; ajuste-as conforme a roupa ficar e como a sua energia se sentir ao longo de duas a quatro semanas.",
        "As metas de calorias muito baixas não convêm a todo mundo: busque orientação clínica se você tiver uma condição médica, estiver grávida ou tiver menos de 18 anos."
      ],
      "limitations": "Os resultados são estimativas de estilo populacional. Não medem a taxa metabólica em um laboratório, não levam em conta cada efeito hormonal ou de medicamentos nem substituem o conselho de um médico ou de um nutricionista. O sexo é modelado com as constantes binárias de Mifflin–St Jeor. As calorias de perda têm um piso de 1200 kcal nesta ferramenta, como um limite suave de segurança só para a estimativa.",
      "article": {
        "title": "Guia da calculadora TDEE: calorias diárias, TMB e macros",
        "intro": "Uma calculadora TDEE converte algumas medidas corporais e uma descrição honesta da atividade em uma estimativa de quantas calorias você precisa todo dia. As pessoas buscam uma calculadora de TMB, uma calculadora de calorias diárias, uma calculadora de calorias de manutenção ou uma calculadora de calorias para perder peso pela mesma razão: querem um número de partida claro antes de mudar como comem. Este guia explica o que significa o gasto energético total diário, como esta página o calcula e como ler os resultados sem tratá-los como uma prescrição médica.",
        "sections": [
          {
            "heading": "O que é o TDEE?",
            "paragraphs": [
              "O gasto energético total diário (TDEE) é o número estimado de calorias que o seu corpo usa em vinte e quatro horas. Inclui a energia necessária para se manter vivo em repouso, a que se usa para digerir os alimentos e a que se queima com o movimento cotidiano e o exercício planejado. Quando a ingestão coincide aproximadamente com o TDEE ao longo do tempo, o peso costuma se manter estável. Comer de forma constante abaixo do TDEE costuma levar a uma perda; comer de forma constante acima costuma levar a um ganho.",
              "O TDEE não é um traço fixo da personalidade. Ele muda quando mudam o peso, a idade, a massa muscular, a rotina e o estado de saúde. Por isso uma calculadora TDEE on-line grátis é mais útil como uma estimativa viva que você atualiza, não como uma tatuagem de uma só vez no seu plano de refeições."
            ]
          },
          {
            "heading": "Como se calcula o TDEE",
            "paragraphs": [
              "A maioria das calculadoras para o público segue dois passos. Primeiro estima a taxa metabólica basal. Depois multiplica essa TMB por um fator de atividade que representa o quanto você é ativo ao longo da semana. Esta calculadora do Tools Star Hub usa Mifflin–St Jeor para a TMB e depois os multiplicadores habituais 1,2 (sedentário), 1,375 (levemente ativo), 1,55 (moderadamente ativo), 1,725 (muito ativo) e 1,9 (extra-ativo).",
              "Quando se conhece o TDEE, as calorias de manutenção equivalem a esse número. As calorias para perder peso subtraem umas 500 kcal por dia, um déficit clássico de planejamento que muitas vezes se associa a uma perda de gordura de aproximadamente meio quilograma por semana quando se segue com cuidado. As calorias para ganhar peso somam umas 300 kcal como superávit moderado. A página também mostra uma distribuição sugerida de macronutrientes para que as proteínas, os carboidratos e as gorduras tenham metas concretas em gramas ligadas à meta que você selecionou."
            ]
          },
          {
            "heading": "TMB em relação ao TDEE",
            "paragraphs": [
              "A TMB é o custo energético de existir: respirar, fazer circular o sangue, reparar células e manter estável a temperatura se você ficasse na cama o dia inteiro. O TDEE é a TMB mais tudo o mais que você realmente faz. Alguém com uma TMB próxima de 1600 kcal que caminha muito e treina quatro vezes por semana poderia se situar perto de 2400–2700 kcal de TDEE, enquanto uma pessoa semelhante que passa sentada a maior parte do dia poderia ficar mais perto de 1900 kcal.",
              "Buscar só uma calculadora de TMB é útil para entender as necessidades em repouso, mas para planejar as refeições costuma ser preciso o TDEE. Comer só no nível da TMB enquanto você leva uma vida ativa é um corte pronunciado para muitas pessoas e não é o objetivo de uma calculadora de calorias de manutenção."
            ]
          },
          {
            "heading": "Multiplicadores de atividade, explicados",
            "paragraphs": [
              "Os multiplicadores de atividade comprimem uma semana irregular em um só número. Sedentário encaixa com um trabalho de escritório e pouco exercício formal. Levemente ativo cobre um esporte leve ou caminhadas uns dias por semana. Moderadamente ativo convém a um treino regular de três a cinco dias por semana. Muito ativo é um treino duro a maioria dos dias. Extra-ativo é para um treino muito duro, um trabalho físico, ou os dois.",
              "As pessoas costumam superestimar. Se você treina duro três tardes, mas passa sentado o resto do dia, moderadamente ativo costuma estar mais perto que muito ativo. Se tiver dúvida, comece um ponto mais abaixo, acompanhe o peso durante duas semanas e ajuste. O [conversor de unidades](/tools/unit-converter) pode ajudar se a sua balança e a sua fita não coincidirem nas unidades, e a [calculadora de idade](/tools/age-calculator) pode confirmar a idade exata quando um aniversário está perto de um corte."
            ]
          },
          {
            "heading": "Calorias para perder peso",
            "paragraphs": [
              "Uma calculadora de calorias para perder peso costuma subtrair uma quantidade moderada do TDEE para que a perda de gordura seja gradual o bastante para proteger o treino e a energia diária. Um déficit diário de 500 kcal é uma cifra habitual de planejamento; esta ferramenta também se recusa a sugerir menos de 1200 kcal na linha de perda, como um piso suave para a estimativa. Esse piso não é uma prescrição pessoal: alguns adultos precisam de ingestões mais altas, e os adolescentes, as pessoas grávidas e qualquer um com uma preocupação clínica pela alimentação não devem usar déficits agressivos sem atenção profissional.",
              "A perda não é só a linha de calorias. A ingestão de proteínas, o sono, os passos e o treino de força influenciam quanto do peso perdido é gordura em relação à massa magra. Calcule de novo o TDEE à medida que o peso corporal baixa, porque um corpo menor costuma queimar um pouco menos."
            ]
          },
          {
            "heading": "Calorias para ganhar peso",
            "paragraphs": [
              "Ganhar peso, sobretudo quando o objetivo é músculo, costuma funcionar melhor com um superávit moderado do que com uma alimentação sem limite. Esta calculadora soma umas 300 kcal acima do TDEE para a meta de ganho. Isso mantém mais lento o ritmo de ganho e pode reduzir quanto desse ganho é gordura, sobretudo se se combinar com um treino de força progressivo e proteínas suficientes.",
              "Se a balança não se mover durante umas semanas com a meta de ganho, suba um pouco a ingestão ou confira que a atividade não tenha sido subestimada. O inverso se aplica se o ganho for mais rápido do que você quer."
            ]
          },
          {
            "heading": "Como entender os macronutrientes",
            "paragraphs": [
              "As calorias descrevem a energia. Os macronutrientes descrevem de onde vem essa energia. As proteínas e os carboidratos aportam umas 4 kcal por grama; as gorduras aportam umas 9 kcal por grama. A ingestão sugerida nesta página usa 30% das calorias da meta como proteínas, 40% como carboidratos e 30% como gorduras, e depois converte essas calorias em gramas.",
              "Esse modelo 30/40/30 é um ponto de partida legível para muitas metas gerais de condicionamento. Os atletas de resistência podem querer mais carboidratos. Alguns planos clínicos ou de treino usam mais proteínas por quilograma de peso corporal em vez de um percentual fixo. Trate as barras como um mapa, não como uma lei, e compare-as com o conselho de um profissional qualificado quando o que está em jogo for importante."
            ]
          },
          {
            "heading": "Fatores que afetam o gasto calórico diário",
            "paragraphs": [
              "Além dos dados do formulário, o gasto responde à massa muscular, à atividade que não é exercício (se mover, ficar de pé, caminhar entre cômodos), à composição da dieta, à dívida de sono, aos hormônios do estresse, à exposição ao frio e às mudanças adaptativas depois de uma dieta prolongada. Duas pessoas com a mesma idade, sexo, altura e peso ainda podem diferir em centenas de calorias.",
              "Também importam os medicamentos, o estado da tireoide e a recuperação de uma doença. As estimativas on-line não podem ver esses fatores. Use o número para fixar um plano inicial e depois deixe que as médias semanais do peso e como você se sente votem se subir ou baixar a ingestão."
            ]
          },
          {
            "heading": "Limites das estimativas de calorias",
            "paragraphs": [
              "Equações como Mifflin–St Jeor foram construídas a partir de dados de grupos. Estão entre as melhores fórmulas de mesa para muitos adultos, mas o erro individual ainda pode ser importante. Os wearables estimam o gasto com os seus próprios vieses. Os rótulos dos alimentos e as porções de restaurante introduzem mais ruído quando você registra a ingestão.",
              "Esta calculadora de calorias diárias não diagnostica transtornos metabólicos, não prescreve dietas nem garante um ritmo de perda ou ganho. É um assistente aritmético transparente: TMB Mifflin–St Jeor, multiplicadores de atividade publicados, deslocamentos claros de manter, perder e ganhar, e uma distribuição visível de macros. Combine-a com paciência e orientação profissional quando precisar de atenção personalizada. Para as matemáticas de percentuais em receitas ou o progresso, a [calculadora de porcentagem](/tools/percentage-calculator) está perto, na mesma família de calculadoras."
            ]
          }
        ]
      },
      "faqs": [
        {
          "question": "O que é uma calculadora TDEE?",
          "answer": "Uma calculadora TDEE estima o gasto energético total diário (as calorias que você queima em um dia) a partir da idade, do sexo, da altura, do peso e da atividade. Esta página também mostra a TMB e as metas calóricas para manter, perder ou ganhar peso."
        },
        {
          "question": "Como funciona esta calculadora TDEE?",
          "answer": "Ela calcula a taxa metabólica basal com a equação de Mifflin–St Jeor por padrão, ou com Katch–McArdle se você informar um percentual de gordura corporal e escolher essa fórmula. Depois a multiplica pelo fator de atividade que você escolhe para obter o TDEE e depois deriva as metas de manutenção, perda (umas −500 kcal) e ganho (umas +300 kcal), mais uma sugestão de macros 30/40/30 sobre a meta selecionada."
        },
        {
          "question": "O que é a equação de Mifflin–St Jeor?",
          "answer": "Mifflin–St Jeor estima a TMB em kcal/dia como 10×peso(kg) + 6,25×altura(cm) − 5×idade + 5 para homens, ou a mesma fórmula com −161 em vez de +5 para mulheres. É muito usada nas calculadoras modernas de TMB e TDEE."
        },
        {
          "question": "Qual é a diferença entre TMB e TDEE?",
          "answer": "A TMB é o uso estimado de energia em repouso. O TDEE multiplica a TMB por um fator de atividade para incluir o movimento diário e o exercício. Os planos de refeições costumam partir do TDEE, não só da TMB."
        },
        {
          "question": "Que nível de atividade devo escolher?",
          "answer": "Escolha a descrição que coincida com uma semana normal. Sedentário é pouco exercício; levemente ativo é de 1 a 3 dias suaves; moderadamente ativo é de 3 a 5 dias moderados; muito ativo é um treino duro a maioria dos dias; extra-ativo é um treino muito duro ou um trabalho físico. Se você não tiver certeza, escolha primeiro a opção mais baixa."
        },
        {
          "question": "Quantas calorias devo comer para perder peso?",
          "answer": "Uma abordagem habitual de planejamento é o TDEE menos umas 500 kcal por dia. Esta ferramenta mostra essa linha de perda de peso e evita que a estimativa baixe de 1200 kcal. As necessidades individuais variam: ajuste conforme o progresso e o conselho profissional."
        },
        {
          "question": "Quantas calorias devo comer para ganhar peso?",
          "answer": "Esta calculadora sugere umas TDEE mais 300 kcal para um superávit moderado. Combine isso com treino de força e proteínas suficientes se a meta for ganhar músculo, e depois ajuste se a balança se mover devagar demais ou rápido demais."
        },
        {
          "question": "Posso usar unidades métricas e imperiais?",
          "answer": "Sim. Alterne entre o sistema métrico (kg, cm) e o imperial (lb, pés e polegadas). A calculadora converte internamente e continua executando Mifflin–St Jeor em unidades métricas."
        },
        {
          "question": "Como se sugerem as proteínas, os carboidratos e as gorduras?",
          "answer": "Os macros sugeridos usam 30% das calorias da meta selecionada como proteínas, 40% como carboidratos e 30% como gorduras, e depois os convertem em gramas (4 kcal/g para proteínas e carboidratos, 9 kcal/g para gorduras). Mude a distribuição se o seu treinador ou o seu clínico preferirem outro modelo."
        },
        {
          "question": "Esta calculadora TDEE é grátis?",
          "answer": "Sim. É grátis no Tools Star Hub e não é preciso uma conta. Os cálculos rodam no seu navegador."
        },
        {
          "question": "Uma estimativa de TDEE é a mesma coisa que um teste metabólico de laboratório?",
          "answer": "Não. A calorimetria indireta e as avaliações clínicas são mais individuais. As fórmulas on-line dão uma estimativa prática de partida e podem errar em uma margem notável para uma pessoa concreta."
        },
        {
          "question": "A idade ou o sexo mudam o resultado?",
          "answer": "Sim. Mifflin–St Jeor inclui a idade e usa constantes distintas para as equações de homens e de mulheres, então a mesma altura e o mesmo peso podem produzir valores distintos de TMB e de TDEE."
        },
        {
          "question": "O que é uma calculadora de calorias de manutenção?",
          "answer": "É outro nome para estimar a ingestão que deveria manter o peso estável. Nesta página, as calorias de manutenção equivalem ao seu TDEE calculado."
        },
        {
          "question": "Os adolescentes ou as pessoas grávidas podem confiar nestas cifras?",
          "answer": "Não como uma prescrição. O formulário aceita idades de estilo adulto para a equação, mas o crescimento, a gravidez e muitas condições médicas precisam de metas guiadas por um clínico, não de uma estimativa genérica on-line."
        },
        {
          "question": "Por que mostrar a TMB se só me importam as calorias diárias?",
          "answer": "A TMB explica a base em repouso do TDEE. Ver as duas ajuda você a entender quanto da sua necessidade diária vem do metabolismo de base em relação à atividade, o que é útil quando as rotinas mudam."
        },
        {
          "question": "Com que frequência devo calcular de novo o TDEE?",
          "answer": "Calcule de novo depois de uma mudança importante de peso, um novo bloco de treino, ou quando a tendência média semanal do seu peso já não coincidir com a meta. Muitas pessoas o revisam a cada duas a seis semanas enquanto estão em uma fase de déficit ou de superávit."
        },
        {
          "question": "Posso copiar ou compartilhar os meus resultados?",
          "answer": "Sim. Copiar resultados coloca um resumo em texto simples na área de transferência. Compartilhar resultados usa a folha de compartilhar do aparelho quando está disponível, ou copia o mesmo resumo para que você possa colá-lo em uma mensagem."
        },
        {
          "question": "Esta ferramenta guarda as minhas medidas?",
          "answer": "Não. A idade, o peso, a altura e os resultados ficam na sessão da página no seu navegador. Nada é enviado a um servidor para calcular o TDEE."
        },
        {
          "question": "A contagem de passos basta sozinha para fixar o meu nível de atividade?",
          "answer": "Os passos ajudam, mas os multiplicadores de atividade do TDEE também refletem o movimento do trabalho, o treino e o NEAT, não só o total de um pedômetro."
        },
        {
          "question": "Devo voltar a comer as calorias que queimei em um treino?",
          "answer": "Em geral não, se você já escolheu um nível de atividade que inclui o treino; somar além disso as queimas do monitor costuma superestimar."
        }
      ]
    }
  },
  "alma-ai-nutrition-coach": {
    "answer": "A Alma é um coach de nutrição com IA e um registro de alimentos grátis: calcula as calorias diárias, a TMB e o TDEE, registra refeições no seu navegador, acompanha proteínas, macros e micronutrientes, e recebe orientação educativa sem um muro de pagamento.",
    "metaDescription": "Calcule calorias diárias, registre alimentos e acompanhe proteínas, macros e micronutrientes com a Alma, seu coach de nutrição com IA grátis.",
    "ui": {},
    "content": {
      "about": "A Alma é um coach de nutrição com IA e um registro de alimentos grátis no Tools Star Hub. Estima as necessidades calóricas diárias com a TMB e o TDEE de Mifflin–St Jeor, calcula as proteínas e os demais macros, enumera referências gerais de micronutrientes, registra o café da manhã até os lanches no seu navegador e oferece ferramentas de planejamento de refeições, lista de compras e orientação educativa, sem um muro de pagamento nem um aplicativo para baixar.",
      "howTo": [
        "Abra a aba Calculadoras e digite a idade, o sexo, a altura, o peso e a atividade. Escolha unidades métricas ou imperiais e depois calcule as calorias diárias, a TMB ou o TDEE.",
        "Escolha uma distribuição de macros ou uma meta de proteínas se quiser objetivos em gramas, e revise a tabela de referência de micronutrientes para valores gerais de adultos.",
        "Use o Registro de alimentos para buscar alimentos de referência de amostra ou produtos embalados do Open Food Facts, adicione um alimento personalizado a partir de um rótulo e registre o café da manhã, o almoço, o jantar ou os lanches.",
        "Consulte o Painel para ver as calorias restantes, o progresso dos macros, a água e o histórico semanal. Planeje refeições, monte uma lista de compras e faça uma pergunta ao coach de nutrição com IA. Tudo o que é básico continua grátis."
      ],
      "examples": [
        {
          "title": "Trabalhador de escritório que define uma meta calórica",
          "body": "Um homem de 30 anos, 80 kg e 180 cm, moderadamente ativo, obtém uma TMB Mifflin–St Jeor próxima de 1780 kcal e um TDEE próximo de 2759 kcal. As calorias de manutenção coincidem com o TDEE. Um déficit padrão de 500 kcal sugeriria umas 2259 kcal, com macros conforme a distribuição selecionada."
        },
        {
          "title": "Registrar o café da manhã a partir de alimentos de amostra",
          "body": "Buscar «aveia» e «banana» na lista de referência de amostra, e depois adicionar uma porção de cada um ao café da manhã, soma as calorias típicas no estilo USDA e o potássio da banana. O painel atualiza a energia restante do dia."
        },
        {
          "title": "Perguntar ao coach sobre as proteínas",
          "body": "Depois de guardar um intervalo de proteínas para treino de força a partir da Calculadora de proteínas, você pode perguntar «De quanta proteína eu preciso?». O coach usa as suas metas salvas e o registro de hoje. Se a IA ao vivo estiver configurada no servidor, a resposta é rotulada como assistida por IA; caso contrário, a Alma usa o seu coach educativo baseado em regras."
        }
      ],
      "explanation": "A energia diária começa com a equação de Mifflin–St Jeor para a taxa metabólica basal e depois um multiplicador de atividade para o gasto energético total diário. Os gramas de macronutrientes saem de uma distribuição calórica escolhida (proteínas e carboidratos a 4 kcal/g, gorduras a 9 kcal/g). Os intervalos de proteínas usam gramas por quilograma de peso corporal. As cifras de micronutrientes são valores de referência dietéticos gerais, não resultados de laboratório. Os números dos alimentos vêm de uma base de dados de amostra rotulada, de dados comunitários do Open Food Facts ou de valores que você digita a partir de uma embalagem.",
      "features": [
        "Módulos grátis de calorias diárias, TMB, TDEE, macros, proteínas, déficit calórico e micronutrientes em uma só página.",
        "Diário de alimentos para café da manhã, almoço, jantar e lanches, com busca, alimentos personalizados, porções, edições e exclusões.",
        "Painel com calorias restantes, anéis de macros, ingestão de água e histórico de sete dias.",
        "Planejador de refeições, lista de compras e sugestões de substituição.",
        "Coach de nutrição com IA educativo, com uma rota segura no servidor quando a IA está configurada, e um respaldo rotulado baseado em regras quando não está.",
        "Armazenamento do diário só no navegador e sem muro de assinatura nos cálculos básicos."
      ],
      "tips": [
        "Ajuste a atividade a uma semana típica, não ao seu dia de treino mais duro.",
        "Prefira uma balança de cozinha e os rótulos de informação nutricional às xícaras calculadas a olho quando puder.",
        "Use as médias semanais do painel em vez de julgar um só dia.",
        "Trate a cobertura de micronutrientes como um convite a ampliar a variedade de alimentos, não como um diagnóstico."
      ],
      "limitations": "A Alma estima energia e nutrientes; não mede o metabolismo em um laboratório, não analisa exames de sangue nem substitui um médico ou um nutricionista. Os alimentos de amostra usam valores típicos publicados no estilo USDA e estão arredondados. As listagens do Open Food Facts são mantidas pela comunidade e costumam ser expressas por 100 g. Os alimentos personalizados só são tão precisos quanto o rótulo que você copia. O sexo é modelado com as constantes binárias de Mifflin–St Jeor. As calorias de perda têm um piso de 1200 kcal, como um limite suave de segurança só para a estimativa.",
      "article": {
        "title": "Alma: coach de nutrição com IA e registro de alimentos, seu guia completo de cálculos nutricionais grátis e alimentação saudável",
        "intro": "As pessoas buscam uma calculadora de nutrição, um site para registrar alimentos e um coach de nutrição com IA pela mesma razão prática: querem uma forma clara de estimar as calorias diárias, ver o que realmente comem e entender as proteínas, os carboidratos, as gorduras e os micronutrientes, sem pagar por um aplicativo bloqueado. A Alma é o espaço de trabalho grátis de cálculos nutricionais e registro de alimentos do Tools Star Hub. Vive no navegador, não exige uma conta e é uma ferramenta educativa, não uma clínica, um serviço de compras nem um produto oficial de uma loja de aplicativos que possa compartilhar o mesmo nome. Este guia explica como funciona uma calculadora de nutrição grátis, como registrar alimentos on-line e como os módulos da Alma se encaixam para que você possa usá-los com expectativas realistas.",
        "sections": [
          {
            "heading": "Calculadora de nutrição e registro de alimentos grátis",
            "paragraphs": [
              "Uma calculadora de nutrição grátis converte algumas medidas corporais e uma descrição da atividade em necessidades calóricas estimadas. Um registro de alimentos compara depois essas necessidades com o que você anota no café da manhã, no almoço, no jantar e nos lanches. A Alma combina as duas tarefas em uma só página para que você não salte entre uma calculadora de calorias diárias, um diário de alimentos à parte e uma planilha para os macros. O Painel mostra uma meta calórica, as calorias consumidas, a energia restante, o progresso de proteínas, carboidratos e gorduras, um registro simples de água e uma semana de histórico.",
              "Como tudo o que é básico é grátis, você pode fazer um cálculo de nutrição diária, registrar um almoço caseiro e fazer uma pergunta educativa sem se deparar com um muro de pagamento. Isso importa para quem já testou um aplicativo de nutrição só para encontrar os relatórios úteis atrás de uma assinatura. A promessa da Alma é mais estreita e mais honesta: aritmética transparente, uma base de dados de alimentos rotulada, armazenamento local e explicações didáticas, não um plano médico personalizado."
            ]
          },
          {
            "heading": "O que é um coach de nutrição com IA?",
            "paragraphs": [
              "Um coach de nutrição com IA é um assistente guiado que responde perguntas de nutrição em uma linguagem clara e, quando você permite, olha as cifras que você já calculou ou registrou. Pode explicar a diferença entre calorias e nutrientes, sugerir como montar um café da manhã mais equilibrado ou indicar alimentos ricos em ferro. Não deve diagnosticar uma deficiência, prescrever uma dieta clínica nem afirmar que um chatbot conhece o seu histórico médico.",
              "O coach da Alma foi construído assim de propósito. Se o Tools Star Hub tiver um serviço de IA configurado, a sua pergunta e um resumo breve do diário de hoje viajam para uma rota do lado do servidor. As chaves de API nunca aparecem no navegador. Se esse serviço não estiver configurado, ou se falhar, a Alma passa a um coach educativo baseado em regras que funciona e rotula a resposta para que nunca se mostre a você um chat de IA ao vivo fingido. Nos dois casos o objetivo é a educação nutricional: ajudar você a interpretar uma estimativa de TDEE, um intervalo de proteínas ou um registro de verduras pela metade."
            ]
          },
          {
            "heading": "Coach de nutrição com IA para uma alimentação saudável",
            "paragraphs": [
              "Uma alimentação saudável tem menos a ver com um dia perfeito e mais com padrões repetíveis: proteínas suficientes para sustentar os músculos e a saciedade, carboidratos para alimentar a atividade, gorduras para os hormônios e as vitaminas lipossolúveis, e uma variedade de plantas que aportam fibra e micronutrientes. Um coach de nutrição com IA é útil quando te mantém centrado nesses padrões em vez de pontuar os alimentos como vitórias ou derrotas morais.",
              "Você pode perguntar como melhorar a nutrição diária depois de uma semana com pouca ingestão de verduras, ou se um café da manhã registrado parece equilibrado. A Alma pode comentar o que está presente (proteínas, vegetais, indícios de fibra) e o que falta, e depois te devolver ao Planejador de refeições ou ao Registro de alimentos para fazer uma mudança pequena. Esse ciclo é o produto: calcular, registrar, revisar, ajustar."
            ]
          },
          {
            "heading": "O que é um site para registrar alimentos?",
            "paragraphs": [
              "Um site para registrar alimentos, às vezes chamado de registro de alimentos on-line, site de acompanhamento de refeições ou diário de alimentos, é uma página onde você anota o que come e vê totais acumulados. Ao contrário de um diário em papel, pode converter as porções em calorias e macros assim que você adiciona um item. Ao contrário de muitos aplicativos móveis de nutrição, um site pode funcionar em uma aba do navegador sem te obrigar a um download.",
              "O registro da Alma está organizado como a maioria das pessoas já pensa um dia: café da manhã, almoço, jantar e lanches. Você busca um alimento, escolhe uma refeição, digita porções, gramas ou mililitros (as bebidas embaladas rotuladas por 100 ml usam mililitros, não gramas) e o adiciona. Você pode editar a quantidade mais tarde ou apagar a linha. O histórico diário e semanal fica no Painel para que uma terça-feira alta não apague uma semana mais típica."
            ]
          },
          {
            "heading": "Registre os seus alimentos e a sua nutrição diária",
            "paragraphs": [
              "Registrar a ingestão diária de alimentos funciona melhor quando há pouca fricção. Busque um alimento de referência de amostra quando você comeu algo simples e sem embalagem, como uma banana ou lentilhas cozidas. Busque no Open Food Facts quando você tem um produto embalado e quer dados nutricionais da comunidade em vez de um número adivinhado. Digite um alimento personalizado quando estiver olhando um rótulo de informação nutricional e puder copiar você mesmo as calorias, as proteínas, os carboidratos e as gorduras.",
              "A Alma nunca inventa uma cifra precisa de um nutriente para uma barra de marca ou um prato de restaurante. A lista de amostra é rotulada como valores típicos no estilo USDA, arredondados para educar. Os resultados do Open Food Facts são rotulados como dados da comunidade, normalmente por 100 g. As entradas personalizadas são rotuladas como os seus números. Essa honestidade faz parte de usar bem uma ferramenta de acompanhamento nutricional: o diário só é tão bom quanto as fontes que você escolhe."
            ]
          },
          {
            "heading": "Como registrar alimentos on-line",
            "paragraphs": [
              "Comece por definir uma data: hoje, ou outro dia que você queira reconstruir. Escolha a refeição, busque ou digite um alimento, defina a porção e adicione-o. Se a porção do seu prato era de 150 g e a listagem é por 100 g, mude a unidade para gramas e digite 150 para que as calorias se dimensionem corretamente. Repita com as bebidas que aportam energia, como o leite, e com os lanches que é fácil esquecer.",
              "Um hábito prático é registrar enquanto você cozinha ou ao desempacotar uma marmita, não à meia-noite de memória. O arredondamento de memória quase sempre encolhe as porções. Se quiser ajuda para converter unidades caseiras, o [conversor de unidades](/tools/unit-converter) está disponível no Tools Star Hub. Se precisar da idade em anos completos para o formulário de calorias, a [calculadora de idade](/tools/age-calculator) pode confirmá-la."
            ]
          },
          {
            "heading": "Calcule as suas necessidades calóricas diárias",
            "paragraphs": [
              "As necessidades calóricas diárias começam com a taxa metabólica basal e depois somam o custo de viver um dia real. Os módulos de calorias diárias, TMB e TDEE da Alma usam a equação de Mifflin–St Jeor, que estima a energia em repouso a partir do peso, da altura, da idade e do sexo, e depois multiplicam por um de cinco fatores de atividade: sedentário, levemente ativo, moderadamente ativo, muito ativo ou extra-ativo. As calorias de manutenção equivalem ao TDEE. Um plano habitual para perder peso subtrai umas 500 kcal; um superávit moderado para ganhar soma umas 300 kcal.",
              "Se você quiser as contas de energia em um desenho independente dedicado, a [calculadora TDEE](/tools/tdee-calculator) usa a mesma abordagem de Mifflin–St Jeor. A Alma mantém esse motor dentro de um espaço de trabalho de nutrição mais amplo para que a meta resultante possa alimentar o seu painel, o seu plano de macros e o seu diário de alimentos sem copiar números à mão.",
              "Quantas calorias você deve consumir por dia continua sendo uma pergunta pessoal. Duas pessoas com a mesma idade e o mesmo peso podem diferir pela massa muscular, pelo movimento involuntário, pelas exigências do trabalho e pelo estado de saúde. Use a estimativa como uma linha de partida e depois observe uma média semanal do peso, a energia e como a roupa fica antes de voltar a cortar a ingestão."
            ]
          },
          {
            "heading": "Calculadora grátis de macronutrientes",
            "paragraphs": [
              "Uma calculadora de macronutrientes, ou calculadora de macros, divide uma meta calórica em proteínas, carboidratos e gorduras. As proteínas e os carboidratos aportam umas quatro calorias por grama; as gorduras aportam umas nove. A Alma deixa você escolher uma distribuição em vez de te prender a uma só proporção da moda. Uma distribuição equilibrada 30/40/30 é um valor padrão legível. Há opções de mais proteínas, menos carboidratos, mais carboidratos e uma distribuição equitativa quando o seu treino ou as suas preferências diferem.",
              "Esses modelos são mapas de partida. Os blocos de resistência costumam querer mais carboidratos. Alguns planos de treino fixam as proteínas em gramas por quilograma em vez de como um percentual das calorias: a Calculadora de proteínas existe por essa razão. A [calculadora de porcentagem](/tools/percentage-calculator) pode ajudar se você estiver conferindo que parte de uma receita ou de uma refeição de restaurante vem de um macro."
            ]
          },
          {
            "heading": "Entenda a sua ingestão diária de proteínas e carboidratos",
            "paragraphs": [
              "A ingestão diária de proteínas é uma das perguntas mais habituais que as pessoas levam a uma calculadora de nutrição. Um intervalo geral de partida muito citado para adultos é de uns 0,8 gramas de proteína por quilograma de peso corporal. As pessoas que treinam com regularidade costumam se situar mais perto de 1,2–1,6 g/kg. Muitos planos de força ou de perda de gordura usam uns 1,6–2,2 g/kg para ajudar a conservar a massa magra. A Alma informa um intervalo e um ponto médio para que a cifra se sinta como uma faixa, não como um mandamento.",
              "Os carboidratos e as gorduras preenchem depois as calorias restantes depois de fixar as proteínas, ou seguem a distribuição percentual que você selecionou. Não há uma ingestão «melhor» universal de carboidratos. Quem caminha e levanta pesos duas vezes por semana pode se sentir bem com um prato de carboidratos moderados; quem corre sessões longas pode se sentir melhor com mais amido em torno do treino. As gorduras não devem ir a zero: aportam sabor e vitaminas lipossolúveis, e os padrões extremamente baixos em gordura não são algo que um site deva prescrever."
            ]
          },
          {
            "heading": "Como calcular proteínas, carboidratos e gorduras",
            "paragraphs": [
              "Para calcular os requisitos de proteínas, converta o seu peso corporal para quilogramas se for preciso, escolha um intervalo de meta e multiplique. Um adulto de 80 kg que use 1,6–2,2 g/kg se situa perto de 128–176 g de proteína. Para calcular carboidratos e gorduras a partir de um orçamento calórico, atribua percentuais, converta essas calorias em gramas e confira que as três partes somem de novo a meta.",
              "Exemplo: 2000 kcal em um plano 30/40/30 são 600 kcal de proteínas (150 g), 800 kcal de carboidratos (200 g) e 600 kcal de gorduras (umas 67 g). Se mais tarde você subir as proteínas para 40 por cento, os carboidratos e as gorduras se reduzem para que as calorias continuem coincidindo. Essa aritmética é o que um cálculo nutricional grátis deveria deixar claro."
            ]
          },
          {
            "heading": "O que são os micronutrientes?",
            "paragraphs": [
              "Os micronutrientes são vitaminas e minerais. Você precisa deles em quantidades muito menores que as proteínas, os carboidratos e as gorduras, e eles aportam pouca ou nenhuma energia, mas põem em marcha processos que as calorias sozinhas não podem descrever: o transporte de oxigênio, a manutenção dos ossos, a função imunológica, o metabolismo energético e mais. Um dia pode alcançar a sua meta calórica e ainda assim ir curto de ferro, folato ou vitamina C se a variedade de alimentos for estreita.",
              "A lista de micronutrientes da Alma cobre a vitamina A, as vitaminas do grupo B inclusive a B12, a vitamina C, a vitamina D, a vitamina E, a vitamina K, o cálcio, o ferro, o magnésio, o zinco, o potássio, o sódio e o folato. Esses são os nutrientes que as pessoas mais costumam pedir a uma calculadora de ingestão de vitaminas ou a um acompanhamento de minerais. As cifras que aparecem junto deles são valores de referência dietéticos gerais, não um exame de sangue nem uma licença para tomar megadoses de suplementos."
            ]
          },
          {
            "heading": "Como acompanhar os micronutrientes",
            "paragraphs": [
              "Acompanhar os micronutrientes é mais trabalhoso que acompanhar as calorias, porque muitas refeições caseiras e listagens genéricas não incluem um painel completo de vitaminas. A Alma aborda o problema em três camadas honestas. Os alimentos de amostra incluem micronutrientes só onde há valores publicados no estilo USDA de forma ampla, por exemplo potássio em uma banana, vitamina C em uma laranja, ou vitamina K e folato no espinafre. O Open Food Facts pode incluir nutrientes extras quando um produto embalado os listou. Os alimentos personalizados são diferentes: o formulário personalizado só admite um nome, calorias, proteínas, carboidratos e gorduras, então as vitaminas e os minerais impressos em um rótulo não se podem digitar e não se contam.",
              "A Calculadora de micronutrientes coloca então os totais rotulados de hoje ao lado de referências gerais de adultos que variam com o sexo e a idade onde o fazem as cifras públicas de DRI. Os percentuais de cobertura só são tão completos quanto os alimentos que traziam dados. Uma célula em branco significa «este registro não tem uma quantidade rotulada», não «você consumiu zero». Essa distinção é essencial para a conscientização sobre deficiências de nutrientes sem converter um site em uma ferramenta de diagnóstico."
            ]
          },
          {
            "heading": "Por que é importante acompanhar os micronutrientes?",
            "paragraphs": [
              "Por que os micronutrientes são importantes? Porque a energia e os micronutrientes respondem perguntas diferentes. As calorias te dizem se a ingestão está no mesmo bairro que o gasto. As vitaminas e os minerais te dizem se essa energia chegou com as matérias-primas que as suas células esperam. O ferro sustenta a hemoglobina. O cálcio e a vitamina D se relacionam com a saúde óssea. O folato importa para a síntese do DNA, e as necessidades mudam na gravidez: outra razão pela qual uma calculadora geral não é um plano pré-natal.",
              "O acompanhamento destaca padrões que de outro modo você poderia passar por alto: dias quase sem plantas, quase sem laticínios ou alternativas fortificadas, ou quase sem alimentos que costumam aportar ferro. A resposta útil costuma ser a variedade de alimentos (lentilhas com uma fonte de vitamina C, verduras folhosas, peixe, ovos, iogurte, feijão), não uma lista automática de suplementos de um chatbot."
            ]
          },
          {
            "heading": "Planejador de refeições e diário de alimentos grátis",
            "paragraphs": [
              "Um diário de alimentos é simplesmente um registro datado do que você comeu. O diário da Alma é o Registro de alimentos. Um planejador de refeições olha para frente em vez de para trás: deixa você colocar ideias de café da manhã, almoço, jantar e lanches nos dias da semana, ver um resumo nutricional de cada sugestão e converter esses ingredientes em uma lista de compras. Você pode preencher um dia de amostra, adicionar a sua própria combinação de refeições sugeridas ou tirar o que não encaixar.",
              "Pratos sugeridos como aveia com banana, frango com arroz e brócolis, ou tofu com quinoa e abacate se montam a partir dos mesmos alimentos de amostra que o registro usa, então as calorias são internamente coerentes. As notas de substituição (frango por tofu, arroz branco por quinoa, salmão por atum) te ajudam a conservar uma forma semelhante de refeição quando você quer outra proteína ou outro grão. Isto é um planejador de refeições saudáveis no sentido educativo, não um chef na sua porta nem um serviço de entrega de compras."
            ]
          },
          {
            "heading": "Como criar um plano de refeições equilibrado",
            "paragraphs": [
              "Um plano de refeições equilibrado costuma repetir uma estrutura simples: cada ocasião de comer tem uma proteína, um carboidrato rico em fibra e uma fruta ou verdura, com gorduras acrescentadas em quantidades modestas para cozinhar ou dar sabor. Dimensione as porções rumo à sua meta calórica em vez de copiar um prato das redes sociais que foi montado para o tamanho e o trabalho de outra pessoa.",
              "Na Alma, escolha uma meta nas calculadoras, coloque refeições sugeridas na semana e depois compare os totais do planejador com o painel depois de comer de verdade. A vida real vai diferir (óleo de restaurante, uma banana maior, um latte esquecido) e o diário está aí para captar isso. Ajuste a próxima lista de compras em vez de recomeçar do zero toda segunda-feira."
            ]
          },
          {
            "heading": "Como o registro de alimentos sustenta hábitos de alimentação saudável",
            "paragraphs": [
              "O registro de alimentos sustenta hábitos de alimentação saudável quando se usa como retroalimentação e não como um placar. Ver que os almoços da semana vão curtos de plantas, ou que os lanches explicam a maior parte de um excesso, é mais útil que rotular um alimento como «ruim». Uma vista semanal importa mais que uma só noite. O registro de água, ainda que seja um contador simples de 250 ml, te lembra que as bebidas também fazem parte do dia.",
              "O acompanhamento pode se tornar pouco útil se alimentar a ansiedade ou regras rígidas. O diário da Alma se guarda em local; o seu coach opcional compartilha uma pergunta e um resumo do diário como se descreve na política de privacidade: você pode apagar uma conversa, pular um dia ou deixar de registrar sem perder o acesso às calculadoras. Se registrar a comida começar a se sentir compulsivo, essa é uma sinalização para dar um passo atrás e, se for preciso, falar com um profissional qualificado, não uma sinalização para registrar com mais empenho."
            ]
          },
          {
            "heading": "Como entender os rótulos nutricionais",
            "paragraphs": [
              "Um rótulo de informação nutricional continua sendo uma das fontes mais fiáveis para os alimentos embalados, que é por isso que existe a entrada personalizada. Olhe primeiro o tamanho da porção. As calorias, as proteínas, os carboidratos e as gorduras se aplicam a essa porção, não necessariamente a toda a embalagem. Se você comer duas porções, duplique as cifras. Se comer 80 g de um produto cujo rótulo é por 100 g, dimensione por 0,8.",
              "Os rótulos também podem listar fibra, açúcares, sódio e algumas vitaminas. Esses extras podem ir a um alimento personalizado ou, quando estão presentes, chegar por meio de uma coincidência do Open Food Facts. As listas de ingredientes ajudam com as substituições de alimentos e a conscientização sobre alérgenos, mas não substituem o painel numérico quando você está fazendo um cálculo do valor nutricional."
            ]
          },
          {
            "heading": "Como usar uma calculadora de nutrição",
            "paragraphs": [
              "Usar bem uma calculadora de nutrição é uma lista breve de conferências. Digite medidas honestas. Escolha um nível de atividade que coincida com uma semana normal. Calcule a TMB e o TDEE para entender tanto as necessidades em repouso quanto as totais. Escolha manter, perder ou ganhar com um deslocamento moderado. Defina os macros ou um intervalo de proteínas. Depois registre de verdade os alimentos durante vários dias antes de voltar a mudar a meta.",
              "Os botões da Alma (Calcular, Redefinir, Copiar resultados e Compartilhar resultados) são controles reais, não decoração. Copie ou compartilhe quando quiser colar cifras em uma nota. Redefina quando quiser partir do adulto de exemplo padrão. Mude as unidades quando a sua balança e o seu estadiômetro não coincidirem. Mudar de meta calcula de novo o objetivo destacado para que você possa ver a manutenção, a perda e o ganho um ao lado do outro."
            ]
          },
          {
            "heading": "Benefícios dos cálculos nutricionais grátis",
            "paragraphs": [
              "Os cálculos nutricionais grátis baixam o custo da curiosidade. Você pode comparar um TDEE sedentário e um moderadamente ativo, testar uma distribuição com mais proteínas ou conferir um déficit calórico sem criar uma conta. Você pode registrar alimentos sem baixar um aplicativo, o que responde a uma pergunta habitual de quem prefere um site de acompanhamento de refeições em um notebook na mesa da cozinha.",
              "Grátis também significa transparente. A Alma mostra a linha de Mifflin–St Jeor, o multiplicador de atividade, o piso de segurança de 1200 kcal em déficits agressivos e a fonte de cada cifra de um alimento. Esse é o benefício que importa mais que uma «ideia premium» bloqueada: você pode ver como o resultado foi montado e decidir no que confiar."
            ]
          },
          {
            "heading": "Como a IA pode ajudar na educação nutricional",
            "paragraphs": [
              "A IA pode ajudar na educação nutricional ao traduzir cifras em explicações e ao notar lacunas em um registro que você já criou. Pode lembrar você de que a TMB não é o TDEE, de que o ferro das plantas combina bem com a vitamina C, ou de que um café da manhã só de torradas vai curto de proteínas. Não pode ver os seus exames, os seus medicamentos nem a sua cultura, e não deve pretender isso.",
              "Usada junto com um diário de alimentos e uma calculadora, a IA é um tutor. Usada no lugar dos dados, se torna conjectura. Por isso a Alma sempre prefere os seus totais registrados e as suas metas salvas quando você faz uma pergunta, e te diz se a resposta veio de um modelo configurado ou do coach educativo integrado."
            ]
          },
          {
            "heading": "Como a Alma te ajuda a entender a sua nutrição",
            "paragraphs": [
              "O trabalho da Alma no Tools Star Hub é reunir em um só lugar as peças móveis da alfabetização nutricional cotidiana: uma calculadora de calorias diárias, uma calculadora de TMB, uma calculadora de TDEE, uma calculadora de macronutrientes, uma calculadora de proteínas, uma calculadora de déficit calórico, uma tabela de referência de micronutrientes, um registro de alimentos, um planejador de refeições e um coach educativo. Ela guarda o seu diário em local, liga à [calculadora TDEE](/tools/tdee-calculator) independente quando você quer essa página sozinha, e continua grátis para o trabalho básico de entender o que você come.",
              "Use-a como um instrumento sereno. Calcule uma meta plausível, registre alimentos com fontes rotuladas, planeje uma lista de compras que você realmente vá cozinhar e faça perguntas quando uma cifra resultar confusa. Isso basta para um centro de nutrição saudável no sentido educativo, e é honesto ao não ser um hospital, um caixa de compras de uma startup nem um aplicativo de nutrição pago disfarçado."
            ]
          }
        ]
      },
      "faqs": [
        {
          "question": "O que é o coach de nutrição com IA Alma?",
          "answer": "A Alma é o coach de nutrição com IA e o registro de alimentos grátis do Tools Star Hub. Estima as calorias diárias, a TMB e o TDEE, calcula macros e intervalos de proteínas, enumera referências gerais de micronutrientes, registra refeições no seu navegador e oferece orientação educativa. Não é conselho médico nem um produto oficial de uma loja de aplicativos móveis."
        },
        {
          "question": "Como funciona um site para registrar alimentos?",
          "answer": "Um site para registrar alimentos anota o que você come e converte essas entradas em calorias e nutrientes. Na Alma você busca ou digita um alimento, o atribui ao café da manhã, ao almoço, ao jantar ou aos lanches, define a porção e vê totais acumulados no painel e no seu diário de alimentos."
        },
        {
          "question": "A Alma é uma calculadora de nutrição grátis?",
          "answer": "Sim. Os cálculos de calorias diárias, TMB, TDEE, macros, proteínas, déficit calórico e micronutrientes são grátis, junto com o registro de alimentos, o planejamento de refeições e o coach educativo. Não há um muro de assinatura nessas funções básicas nem uma conta para criar."
        },
        {
          "question": "Como posso calcular as minhas necessidades calóricas diárias?",
          "answer": "Digite a idade, o sexo, a altura, o peso e a atividade, e depois calcule. A Alma usa Mifflin–St Jeor para a TMB e a multiplica por um fator de atividade para estimar o TDEE. As calorias de manutenção equivalem ao TDEE. Você também pode usar a calculadora TDEE independente do Tools Star Hub se só quiser as contas de energia."
        },
        {
          "question": "Como registro a minha ingestão diária de alimentos?",
          "answer": "Abra o Registro de alimentos, escolha uma data e uma refeição, busque alimentos de amostra ou produtos embalados, ou adicione um alimento personalizado com calorias, proteínas, carboidratos e gorduras a partir de um rótulo. Defina porções, gramas ou mililitros e depois adicione o item. Nos alimentos de amostra e personalizados, 1 ml se conta como 1 g: é próximo para bebidas parecidas com a água, mas não para óleos, xaropes ou líquidos espessos, então digite gramas nesses casos. As bebidas embaladas cujos dados do Open Food Facts estão claramente por 100 ml se registram em mililitros, ou em porções quando o rótulo dá uma porção em ml; nunca se convertem para gramas. Outros produtos embalados admitem gramas ou porções. Os produtos cuja base não está clara ficam de fora da busca de alimentos embalados; use um alimento de amostra ou uma entrada personalizada para eles. Você pode editar ou apagar entradas mais tarde. Os totais aparecem no painel."
        },
        {
          "question": "Como calculo os requisitos de proteínas?",
          "answer": "Use a Calculadora de proteínas com o seu peso corporal e uma meta: saúde geral, atividade regular, força ou perda de gordura com o músculo em mente. A Alma mostra um intervalo em gramas por quilograma (uns 0,8–1,0 g/kg em geral, e intervalos mais altos para o treino ou uma dieta), não um único número universal."
        },
        {
          "question": "Como posso acompanhar os micronutrientes?",
          "answer": "Registre alimentos que já tragam dados de vitaminas e minerais: alguns alimentos de amostra e algumas listagens do Open Food Facts. Os alimentos personalizados só admitem calorias, proteínas, carboidratos e gorduras, então as vitaminas e os minerais de um rótulo que você digita não são acompanhados. A Calculadora de micronutrientes compara esses totais acumulados com valores de referência gerais de adultos. Uma célula em branco significa que o registro não tem uma quantidade rotulada, não que a ingestão foi zero."
        },
        {
          "question": "Por que os micronutrientes são importantes?",
          "answer": "As vitaminas e os minerais sustentam a imunidade, a saúde óssea, o transporte de oxigênio e muitos outros processos. As calorias descrevem a energia; os micronutrientes descrevem parte das matérias-primas que chegaram com essa energia. Acompanhá-los serve para achar padrões e educar, não para diagnosticar uma deficiência."
        },
        {
          "question": "Qual é a diferença entre macronutrientes e micronutrientes?",
          "answer": "Os macronutrientes são as proteínas, os carboidratos e as gorduras: os nutrientes que aportam quase todas as calorias da dieta. Os micronutrientes são as vitaminas e os minerais, que se precisam em quantidades muito menores e aportam pouca ou nenhuma energia. Você pode alcançar uma meta calórica e ainda assim ficar curto de ferro ou folato se a variedade de alimentos for estreita."
        },
        {
          "question": "Como posso calcular os carboidratos e as gorduras?",
          "answer": "Quando você já tem uma meta calórica, escolha uma distribuição de macros. As proteínas e os carboidratos aportam umas 4 kcal por grama; as gorduras aportam umas 9. Um plano 30/40/30 de 2000 kcal são uns 150 g de proteínas, 200 g de carboidratos e 67 g de gorduras. A Calculadora de macronutrientes faz essa conversão."
        },
        {
          "question": "Qual é a melhor forma de acompanhar a nutrição diária?",
          "answer": "Defina uma meta realista de calorias e proteínas, registre as refeições no momento em vez de fazê-lo de memória no fim do dia, use uma balança ou um rótulo quando puder e revise os totais semanais em vez de um só dia. Combine o painel, o diário de alimentos e o planejador de refeições para que o planejamento e o registro continuem conectados."
        },
        {
          "question": "Posso registrar alimentos sem baixar um aplicativo?",
          "answer": "Sim. A Alma funciona no navegador como um site de acompanhamento de refeições e um registro de alimentos on-line. Você não precisa baixar um aplicativo da Alma para calcular a nutrição ou levar um diário de alimentos. Os dados ficam neste navegador, salvo se você perguntar ao coach ou buscar no Open Food Facts."
        },
        {
          "question": "O que é um diário de alimentos?",
          "answer": "Um diário de alimentos, ou um registro de refeições, é uma contagem datada de alimentos e bebidas. O diário da Alma guarda o café da manhã, o almoço, o jantar e os lanches com calorias, macros e os micronutrientes disponíveis, mais um registro simples de água, para que você possa olhar para trás ao longo da semana."
        },
        {
          "question": "Como posso criar um plano de refeições saudável?",
          "answer": "Escolha uma meta calórica e depois monte os dias em torno de uma proteína, um carboidrato rico em fibra e plantas. O Planejador de refeições da Alma oferece sugestões de café da manhã, almoço, jantar e lanches, deixa você preencher um dia de amostra, admite substituições e pode montar uma lista de compras a partir dos ingredientes planejados."
        },
        {
          "question": "Quão precisas são as calculadoras de nutrição on-line?",
          "answer": "São estimativas. Mifflin–St Jeor e os multiplicadores de atividade são pontos de partida úteis, mas não podem ver hormônios, medicamentos nem o movimento involuntário. Os números dos alimentos dependem de valores de referência de amostra, de listagens do Open Food Facts ou do rótulo que você digitou. Trate os resultados como ferramentas de planejamento e ajuste-os a partir das tendências semanais."
        },
        {
          "question": "Quantas calorias devo consumir por dia?",
          "answer": "Não há um único número para todo mundo. Calcule o TDEE a partir dos seus dados e depois coma perto dessa quantidade para manter o peso, um pouco abaixo para perder ou um pouco acima para ganhar. A Alma também põe um piso de 1200 kcal nas calorias sugeridas de perda, como um limite suave da estimativa, não uma prescrição pessoal."
        },
        {
          "question": "A IA pode ajudar a planejar as refeições?",
          "answer": "Sim, como um assistente educativo. A Alma pode sugerir ideias de refeições, comentar um café da manhã registrado e explicar como equilibrar um prato. Se a IA ao vivo estiver configurada, as respostas são rotuladas como assistidas por IA; caso contrário, você obtém um coach rotulado baseado em regras. Nenhum escreve uma dieta médica."
        },
        {
          "question": "Qual é a diferença entre TMB e TDEE?",
          "answer": "A TMB é a energia estimada em repouso: as calorias que se usam em repouso total. O TDEE multiplica a TMB por um fator de atividade para incluir o movimento diário e o treino. O planejamento de refeições costuma usar o TDEE. Comer só no nível da TMB enquanto você leva uma vida ativa é um corte pronunciado para muitas pessoas."
        },
        {
          "question": "Para que vitaminas e minerais a Alma mostra valores de referência?",
          "answer": "A Calculadora de micronutrientes enumera valores de referência gerais de adultos para a vitamina A, as vitaminas B1, B2, B3, B6 e B12, a vitamina C, a vitamina D, a vitamina E, a vitamina K, o cálcio, o ferro, o magnésio, o zinco, o potássio, o sódio e o folato, ajustados por sexo e idade onde diferem as cifras públicas de referência. São referências populacionais, não metas pessoais; para um acompanhamento médico, confie em um clínico, não em um site."
        },
        {
          "question": "O registro de alimentos on-line é grátis?",
          "answer": "Na Alma, sim. Buscar alimentos, registrar refeições, ver o histórico, planejar refeições e executar as calculadoras de nutrição é grátis. O seu diário se guarda em local no navegador, não atrás de uma conta na nuvem paga."
        }
      ]
    }
  }
};

export default data;

export type Level = {    
    title: String;
    color: String;
    icon: String;
    imc: number[];
    yourImc ?: number;

};


export const levels: Level[] =  [
    {title: 'Magreza'    ,color:'#874949'     ,icon:'down'      ,imc:[0,18.5]},
    {title: 'Normal'     ,color:'#606bdb'     ,icon:'up'        ,imc:[18.6, 24.9]},
    {title: 'Sobrepeso'  ,color:'##c75326'    ,icon:'down'      ,imc:[25, 30]},
    {title: 'Obesidade'  ,color:'#ff0000'     ,icon:'down'      ,imc:[30.1, 99]},
];

export const calculateImc = (weight:number, height:number) =>{
    const imc = weight / (height * height); // weight = peso, height = altura//
                   // i = linha correspondente//
                   //imc 0 = 1 e imc 1 e o ultimo//
                   //yourImc é igual o resultado correspondente ao imc,, retornando dinamicamente as imagens e o valor// 
   
   
for (let i in levels) {          // declara diratamente o i com o let in, for significa para, dentro do for ele ja sabe que é um numero//
if (imc >= levels [i].imc[0] && levels[i].imc[1]){
 levels[i].yourImc = imc
return levels[i]

 }
 }
return null                        // para a execução , para nao retornar novamente//
}

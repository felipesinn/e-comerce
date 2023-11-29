 export class User {
    constructor(
        private id: string, 
        public name: string, 
        public username: string, 
        public email: string
        ){}

        addToCar(): void {
            console.log("produto adicionado com sucesso")
        }

        removelFromCart(): void {
            console.log("Produto removido com sucesso")
        }

        showProducts(): void {
            console.log("Mostrando Produto")
        }
}



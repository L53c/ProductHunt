This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# ProductHuntClone
# ProductHunt


extension AuthErrorCode {
    var description: String? {
        switch self {
        case .emailAlreadyInUse:
            return "Este correo ya está siendo usado por otro usuario"
        case .userDisabled:
            return "Este usuario ha sido deshabilitado"
        case .operationNotAllowed:
            return "Operación no permitida"
        case .invalidEmail:
            return "Correo electrónico no valido"
        case .wrongPassword:
            return "Contraseña incorrecta"
        case .userNotFound:
            return "No se encontró cuenta del usuario con el correo especificado"
        case .networkError:
            return "Promblema al intentar conectar al servidor"
        case .weakPassword:
            return "Contraseña muy debil o no válida"
        case .missingEmail:
            return "Hace falta registrar un correo electrónico"
        case .internalError:
            return "Error interno"
        case .invalidCustomToken:
            return "Token personalizado invalido"
        case .tooManyRequests:
            return "Ya se han enviado muchas solicitudes al servidor"
        default:
            return nil
        }
    }
}
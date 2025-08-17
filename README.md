# 📦 DGII.ComprobantesFiscales

Este proyecto contiene el API que es consumida con la aplicación cliente.

---

## 🛠️ Inicializar Base de Datos

Para crear la base de datos y poblarla con datos dummy definidos mediante `HasData`, sigue estos pasos:

### 1. Crear la migración inicial

```bash
dotnet ef migrations add InitialCreate
```

Este comando generará los archivos necesarios para crear el esquema de la base de datos a partir de tu modelo (`TaxPayer`, `TaxInvoice`).

### 2. Aplicar la migración a la base de datos

```bash
dotnet ef database update
```

Esto:

- Crea la base de datos si no existe.
- Aplica todas las migraciones.
- Inserta automáticamente los datos definidos mediante `HasData`.


## 🧪 Datos Dummy Predefinidos

Los siguientes datos serán insertados automáticamente durante la migración:

### 👤 Contribuyentes (`TaxPayer`)

```csharp
modelBuilder.Entity<TaxPayer>().HasData(
    new TaxPayer
    {
        Id = 1,
        Document = "40100000001",
        Name = "Empresa ABC, SRL",
        Type = "SOC",
        Status = "ACT"
    },
    new TaxPayer
    {
        Id = 2,
        Document = "40200000002",
        Name = "Juan Pérez",
        Type = "FIS",
        Status = "ACT"
    });
```

### 🧾 Comprobantes Fiscales (`TaxInvoice`)

```csharp
modelBuilder.Entity<TaxInvoice>().HasData(
    new TaxInvoice
    {
        Id = 1,
        TaxPayerId = 1,
        Document = "40100000001",
        NCF = "B0100100101",
        Amount = 15000m,
        ITBIS18 = 2700m
    },
    new TaxInvoice
    {
        Id = 2,
        TaxPayerId = 2,
        Document = "40200000002",
        NCF = "E3200000001",
        Amount = 500m,
        ITBIS18 = 90m
    });
```

Estas entidades están relacionadas por la clave foránea `TaxPayerId`.

---

✅ Listo. Al ejecutar `dotnet ef database update`, tu base de datos estará completamente estructurada y pre-cargada con datos iniciales.

# 05 — Cliente HTTP tipado

Implementa un cliente que compruebe `response.ok`, trate JSON inválido y no convierta automáticamente datos remotos en datos seguros.

Usa un parser recibido como argumento para transformar `unknown` a un tipo de dominio. Un tipo genérico no sustituye la validación en runtime.

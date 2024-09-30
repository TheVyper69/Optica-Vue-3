<template>
    <div class="container text-center">
        <div class="row p-5 align-items-center">
            <div class="col">

            </div>
            <div class="col align-self-center">
                <div class="card shadow-sm" style="width: 24rem;">
                    <div class="card-body">
                        <h5 class="card-title text-center  ">Registro</h5>
                        <form>
                            <div class="mb-3">
                                <label for="email" class="form-label">Correo Electrónico</label>
                                <input type="email" class="form-control" id="email" placeholder="nombre@ejemplo.com"
                                    required>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Contraseña</label>
                                <input type="password" class="form-control" id="password" placeholder="********"
                                    required>
                            </div>
                            <div class="d-grid">
                                <button type="submit" class="btn btn-primary">Registrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col">

            </div>
        </div>
    </div>
</template>

<script setup>

</script>
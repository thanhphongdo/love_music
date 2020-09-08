import Vue from 'vue';
const validation = require('../config/validatation');

Vue.directive('focus', {
    inserted: (el) => {
        // el.focus();
        console.log('11111111111111');
    }
});

Vue.directive('validate', {
    inserted: (el, data) => {
        $(el).submit(event => {
            event.preventDefault();
        });
        $(el).form({
            on: 'blur',
            inline: true,
            fields: validation,
            onSuccess: (event, fields) => {
                event.preventDefault();
                if (data.value.onSuccess) {
                    data.value.onSuccess(event, fields);
                }
            },
            onFailure: (formErrors, fields) => {
                if (data.value.onFailure) {
                    data.value.onFailure(formErrors, fields);
                }
            },
            onValid: (fields) => {
                if (data.value.onValid) {
                    data.value.onValid(fields);
                }
            },
            onInValid: (fields) => {
                if (data.value.onInValid) {
                    data.value.onInValid(fields);
                }
            }
        });
    }
});

Vue.directive('transition', {
    inserted: (el, data) => {
        setTimeout(() => {
            $(el).transition({
                animation: data.value.animation || 'fade',
                duration: data.value.duration || '1s',
            });
        }, data.value.deplay || 0);
        if (data.value.againOn) {
            $(el)[data.value.againOn](() => {
                $(el).transition({
                    animation: data.value.animation || 'fade',
                    duration: data.value.againDuration || '1s',
                });
            });
        }
    }
});

Vue.filter('date', function (value) {
    if (!value) return ''
    value = new Date(value);
    return value.toDateString();
})
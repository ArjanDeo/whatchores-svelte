<script context="module">
    // @ts-ignore
    export function load({ error, status }) {
        return {
            props: {
                title: `${status}: ${error.message}`
            }
        };
    }
  </script>

  <script>
    export let title;
  </script>

  <h1>{title} sigma gyatt</h1>
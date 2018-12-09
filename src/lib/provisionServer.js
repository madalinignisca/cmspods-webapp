const CLOUD_INIT = `
#cloud-config
swap:
  filename: /swap.img
  size: "auto"
  maxsize: 2147483648
ntp:
  enabled: true
packages:
  - docker-ce
package_update: true
package_upgrade: true
package_reboot_if_required: true
write_files:
  - encoding: b64
    content: |
      W2RvY2tlci1jZS1zdGFibGVdCm5hbWU9RG9ja2VyIENFIFN0YWJsZSAtICRiYXNlYXJjaApiYXNl
      dXJsPWh0dHBzOi8vZG93bmxvYWQuZG9ja2VyLmNvbS9saW51eC9jZW50b3MvNy8kYmFzZWFyY2gv
      c3RhYmxlCmVuYWJsZWQ9MQpncGdjaGVjaz0xCmdwZ2tleT1odHRwczovL2Rvd25sb2FkLmRvY2tl
      ci5jb20vbGludXgvY2VudG9zL2dwZwoKW2RvY2tlci1jZS1zdGFibGUtZGVidWdpbmZvXQpuYW1l
      PURvY2tlciBDRSBTdGFibGUgLSBEZWJ1Z2luZm8gJGJhc2VhcmNoCmJhc2V1cmw9aHR0cHM6Ly9k
      b3dubG9hZC5kb2NrZXIuY29tL2xpbnV4L2NlbnRvcy83L2RlYnVnLSRiYXNlYXJjaC9zdGFibGUK
      ZW5hYmxlZD0wCmdwZ2NoZWNrPTEKZ3Bna2V5PWh0dHBzOi8vZG93bmxvYWQuZG9ja2VyLmNvbS9s
      aW51eC9jZW50b3MvZ3BnCgpbZG9ja2VyLWNlLXN0YWJsZS1zb3VyY2VdCm5hbWU9RG9ja2VyIENF
      IFN0YWJsZSAtIFNvdXJjZXMKYmFzZXVybD1odHRwczovL2Rvd25sb2FkLmRvY2tlci5jb20vbGlu
      dXgvY2VudG9zLzcvc291cmNlL3N0YWJsZQplbmFibGVkPTAKZ3BnY2hlY2s9MQpncGdrZXk9aHR0
      cHM6Ly9kb3dubG9hZC5kb2NrZXIuY29tL2xpbnV4L2NlbnRvcy9ncGcKCltkb2NrZXItY2UtZWRn
      ZV0KbmFtZT1Eb2NrZXIgQ0UgRWRnZSAtICRiYXNlYXJjaApiYXNldXJsPWh0dHBzOi8vZG93bmxv
      YWQuZG9ja2VyLmNvbS9saW51eC9jZW50b3MvNy8kYmFzZWFyY2gvZWRnZQplbmFibGVkPTAKZ3Bn
      Y2hlY2s9MQpncGdrZXk9aHR0cHM6Ly9kb3dubG9hZC5kb2NrZXIuY29tL2xpbnV4L2NlbnRvcy9n
      cGcKCltkb2NrZXItY2UtZWRnZS1kZWJ1Z2luZm9dCm5hbWU9RG9ja2VyIENFIEVkZ2UgLSBEZWJ1
      Z2luZm8gJGJhc2VhcmNoCmJhc2V1cmw9aHR0cHM6Ly9kb3dubG9hZC5kb2NrZXIuY29tL2xpbnV4
      L2NlbnRvcy83L2RlYnVnLSRiYXNlYXJjaC9lZGdlCmVuYWJsZWQ9MApncGdjaGVjaz0xCmdwZ2tl
      eT1odHRwczovL2Rvd25sb2FkLmRvY2tlci5jb20vbGludXgvY2VudG9zL2dwZwoKW2RvY2tlci1j
      ZS1lZGdlLXNvdXJjZV0KbmFtZT1Eb2NrZXIgQ0UgRWRnZSAtIFNvdXJjZXMKYmFzZXVybD1odHRw
      czovL2Rvd25sb2FkLmRvY2tlci5jb20vbGludXgvY2VudG9zLzcvc291cmNlL2VkZ2UKZW5hYmxl
      ZD0wCmdwZ2NoZWNrPTEKZ3Bna2V5PWh0dHBzOi8vZG93bmxvYWQuZG9ja2VyLmNvbS9saW51eC9j
      ZW50b3MvZ3BnCgpbZG9ja2VyLWNlLXRlc3RdCm5hbWU9RG9ja2VyIENFIFRlc3QgLSAkYmFzZWFy
      Y2gKYmFzZXVybD1odHRwczovL2Rvd25sb2FkLmRvY2tlci5jb20vbGludXgvY2VudG9zLzcvJGJh
      c2VhcmNoL3Rlc3QKZW5hYmxlZD0wCmdwZ2NoZWNrPTEKZ3Bna2V5PWh0dHBzOi8vZG93bmxvYWQu
      ZG9ja2VyLmNvbS9saW51eC9jZW50b3MvZ3BnCgpbZG9ja2VyLWNlLXRlc3QtZGVidWdpbmZvXQpu
      YW1lPURvY2tlciBDRSBUZXN0IC0gRGVidWdpbmZvICRiYXNlYXJjaApiYXNldXJsPWh0dHBzOi8v
      ZG93bmxvYWQuZG9ja2VyLmNvbS9saW51eC9jZW50b3MvNy9kZWJ1Zy0kYmFzZWFyY2gvdGVzdApl
      bmFibGVkPTAKZ3BnY2hlY2s9MQpncGdrZXk9aHR0cHM6Ly9kb3dubG9hZC5kb2NrZXIuY29tL2xp
      bnV4L2NlbnRvcy9ncGcKCltkb2NrZXItY2UtdGVzdC1zb3VyY2VdCm5hbWU9RG9ja2VyIENFIFRl
      c3QgLSBTb3VyY2VzCmJhc2V1cmw9aHR0cHM6Ly9kb3dubG9hZC5kb2NrZXIuY29tL2xpbnV4L2Nl
      bnRvcy83L3NvdXJjZS90ZXN0CmVuYWJsZWQ9MApncGdjaGVjaz0xCmdwZ2tleT1odHRwczovL2Rv
      d25sb2FkLmRvY2tlci5jb20vbGludXgvY2VudG9zL2dwZwoKW2RvY2tlci1jZS1uaWdodGx5XQpu
      YW1lPURvY2tlciBDRSBOaWdodGx5IC0gJGJhc2VhcmNoCmJhc2V1cmw9aHR0cHM6Ly9kb3dubG9h
      ZC5kb2NrZXIuY29tL2xpbnV4L2NlbnRvcy83LyRiYXNlYXJjaC9uaWdodGx5CmVuYWJsZWQ9MApn
      cGdjaGVjaz0xCmdwZ2tleT1odHRwczovL2Rvd25sb2FkLmRvY2tlci5jb20vbGludXgvY2VudG9z
      L2dwZwoKW2RvY2tlci1jZS1uaWdodGx5LWRlYnVnaW5mb10KbmFtZT1Eb2NrZXIgQ0UgTmlnaHRs
      eSAtIERlYnVnaW5mbyAkYmFzZWFyY2gKYmFzZXVybD1odHRwczovL2Rvd25sb2FkLmRvY2tlci5j
      b20vbGludXgvY2VudG9zLzcvZGVidWctJGJhc2VhcmNoL25pZ2h0bHkKZW5hYmxlZD0wCmdwZ2No
      ZWNrPTEKZ3Bna2V5PWh0dHBzOi8vZG93bmxvYWQuZG9ja2VyLmNvbS9saW51eC9jZW50b3MvZ3Bn
      CgpbZG9ja2VyLWNlLW5pZ2h0bHktc291cmNlXQpuYW1lPURvY2tlciBDRSBOaWdodGx5IC0gU291
      cmNlcwpiYXNldXJsPWh0dHBzOi8vZG93bmxvYWQuZG9ja2VyLmNvbS9saW51eC9jZW50b3MvNy9z
      b3VyY2UvbmlnaHRseQplbmFibGVkPTAKZ3BnY2hlY2s9MQpncGdrZXk9aHR0cHM6Ly9kb3dubG9h
      ZC5kb2NrZXIuY29tL2xpbnV4L2NlbnRvcy9ncGcK
    path: /etc/yum.repos.d/docker-ce.repo
  - content: |
      [Service]
      ExecStart=
      ExecStart=/usr/bin/dockerd -H unix:// -H tcp://0.0.0.0:2375 --api-cors-header=*
    path: /etc/systemd/system/docker.service.d/override.conf
runcmd:
  - systemctl daemon-reload
  - systemctl enable docker
  - systemctl start docker
`;

const providers = {
  hetzner: {
    apiEndpoint: 'https://api.hetzner.cloud/v1/servers'
  }
}

const provisionServer = (data) => {
  console.log("Provisioning server...");
  console.log(data);
};

export default provisionServer;

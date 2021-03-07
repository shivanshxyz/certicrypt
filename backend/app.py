import hashlib
import os
import io
import datetime
from chalice import Chalice, CORSConfig, BadRequestError


def _get_request_bytes():
    return io.BytesIO(app.current_request.raw_body)


def _validate(doc_hash, doc_name, pt=False):
    global data
    if pt:
        from pytezos import pytezos
        pytezos = pytezos.using(shell='testnet')
        ci = pytezos.contract('KT1DMYxvZCqSVcpea8t6xdVdoDRgPHY3x9sD')
    return data.get(doc_hash, {})


app = Chalice(app_name='certicrypt')
cors_config = CORSConfig(allow_origin='*')


def format_time(d):
    return d.strftime("%A, %d. %B %Y %I:%M%p")


data = {
    '787304db3741879adb1639e78f396a32': {'name': 'closingdisclosure.pdf', 'size': 18994, 'uploaded': format_time(datetime.datetime.now())}
}


def get_doc_hash(file_data):
    data = file_data.getvalue()
    m = hashlib.md5()
    m.update(data)
    file_hash = m.hexdigest()
    return file_hash



